import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Schema } from 'joi';
import { IResponse } from '../common/common.interface';

//Request body validation
export function validateRequestBody(schema: Schema): RequestHandler {
    return (req: Request, res: Response<IResponse<null>>, next: NextFunction): void => {
        if (!req.body || Object.keys(req.body).length === 0) {
            const response: IResponse<null> = {
                status: 400,
                message: 'Request payload is missing or empty',
                errors: ['Request payload cannot be empty'],
            };
            res.status(400).json(response);
            return;
        }
        console.log("req.body", req.body);

        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errors = error.details.map(detail => detail.message);

            const response: IResponse<null> = {
                status: 400,
                message: 'Validation failed for the request body',
                errors,
            };

            res.status(400).json(response);
            return;
        }
        next();
    };
}
