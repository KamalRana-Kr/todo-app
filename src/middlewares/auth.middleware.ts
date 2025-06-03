import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IResponse, AuthenticatedRequest } from '../common/common.interface';
import { PUBLIC_APIS } from '../utils/constants';
import { User } from '../modules/auth/auth.model';

interface DecodedToken extends JwtPayload {
  userId: string;
  email: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response<IResponse<null>>,
  next: NextFunction
): Promise<void> => {
  try {

    //Checking public APIs
    if (PUBLIC_APIS.includes(req.path)) {
      return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        status: 401,
        message: 'Authentication token missing or invalid',
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    const JWT_SECRET = process.env.JWT_SECRET || 'thinkwik@123';

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    const user = await User.findById(decoded.userId);

    if (!user) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized user',
      });
      return;
    }

    (req as AuthenticatedRequest).user = {
      userId: user._id.toString(),
      email: user.email,
    };

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({
      status: 401,
      message: 'Invalid or expired token',
    });
  }
};
