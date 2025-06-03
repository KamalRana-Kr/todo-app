import { Request } from 'express';

export interface IResponse<T> {
    status: number;
    message: string;
    data?: T;
    errors?: string[];
}

export interface AuthUser {
    userId: string;
    email: string;
}

export interface AuthenticatedRequest extends Request {
    user: AuthUser;
}
