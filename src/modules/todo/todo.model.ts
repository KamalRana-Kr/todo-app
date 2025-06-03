import mongoose, { Schema, Types, Document, Model } from 'mongoose';
import { ITodo } from './todo.interface';

export interface ITodoModel extends Omit<ITodo, '_id'>, Document { }

const todoSchema = new Schema<ITodoModel>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        dueDate: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

export const Todo: Model<ITodoModel> = mongoose.model<ITodoModel>('Todo', todoSchema);
