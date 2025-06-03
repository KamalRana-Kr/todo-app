import { Request, Response, NextFunction } from 'express';
import { IResponse } from '../common/common.interface';

//Error handler
export const errorHandler = (
    err: any,
    req: Request,
    res: Response<IResponse<null>>,
    next: NextFunction
) => {
    const statusCode = err.status || 500;
    const errors = err.errors || [err.message || 'Internal Server Error'];
    console.error("err", err);
    const response: IResponse<null> = {
        status: statusCode,
        message: err.message || 'An error occurred',
        errors,
    };

    res.status(statusCode).json(response);
};
