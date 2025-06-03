import { Request, Response, NextFunction } from 'express';
import { signup as signupService, login as loginService } from './auth.service';
import { IResponse } from '../../common/common.interface';
import { signUpResponseInterface, loginResponseInterface, SignupDTO, LoginDTO } from './auth.interface';
import { HTTP_STATUS_CODES, AUTH_MESSAGES } from '../../utils/constants';

// User signup API
export const signup = async (
    req: Request<{}, {}, SignupDTO>,
    res: Response<IResponse<signUpResponseInterface>>,
    next: NextFunction
): Promise<void> => {
    try {
        console.info(`Received request to signup user with email: ${req.body.email}`);

        const result = await signupService(req.body);

        const response: IResponse<signUpResponseInterface> = {
            status: HTTP_STATUS_CODES.CREATED,
            message: AUTH_MESSAGES.USER_REGISTERED_SUCCESS,
            data: result,
        };

        console.info(`User registered successfully with email: ${req.body.email}`);
        res.status(HTTP_STATUS_CODES.CREATED).json(response);
    } catch (error) {
        console.error(`Error in signup function for user with email: ${req.body.email}`, error);
        next(error);
    }
};

// User login API
export const login = async (
    req: Request<{}, {}, LoginDTO>,
    res: Response<IResponse<loginResponseInterface>>,
    next: NextFunction
): Promise<void> => {
    try {
        console.info(`Received login request for email: ${req.body.email}`);

        const result = await loginService(req.body);

        const response: IResponse<loginResponseInterface> = {
            status: HTTP_STATUS_CODES.OK,
            message: AUTH_MESSAGES.USER_LOGGED_IN_SUCCESS,
            data: result
        };

        console.info(`User logged in successfully with email: ${req.body.email}`);
        res.status(HTTP_STATUS_CODES.OK).json(response);
    } catch (error) {
        console.error(`Error in login function for user with email: ${req.body.email}`, error);
        next(error);
    }
};
