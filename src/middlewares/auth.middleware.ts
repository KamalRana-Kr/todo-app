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
    const isPublic = PUBLIC_APIS.some(api => req.path.startsWith(api));

    if (isPublic) {
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

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as DecodedToken;

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
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({
        status: 401,
        message: 'Token has expired'
      });
    } else {
      res.status(401).json({
        status: 401,
        message: 'Invalid token'
      });
    }
  }
};
