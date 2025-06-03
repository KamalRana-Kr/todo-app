import { Types } from 'mongoose';

export interface ITodo {
    _id: Types.ObjectId;
    title: string;
    description?: string;
    dueDate: Date;
    completed: boolean;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTodoDTO {
    title: string;
    description: string;
    dueDate: Date;
}

export interface TodoResponse {
    id: string;
    title: string;
    description: string;
    status: string;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
