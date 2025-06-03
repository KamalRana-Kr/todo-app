import { Todo } from './todo.model';
import { CreateTodoDTO, TodoResponse } from './todo.interface';
import { Types } from 'mongoose';

export async function createTodo(
    data: CreateTodoDTO,
    userId: string
): Promise<TodoResponse> {
    const todo = new Todo({
        ...data,
        user: new Types.ObjectId(userId),
    });
    const result = await todo.save();

    return {
        id: result.id,
        title: result.title,
        description: result.description || '',
        status: result.completed ? 'completed' : 'pending',
        dueDate: result.dueDate,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
    };
}
