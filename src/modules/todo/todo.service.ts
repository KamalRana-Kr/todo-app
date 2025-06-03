import { Todo } from './todo.model';
import { CreateTodoDTO, TodoResponse, UpdateTodoDTO } from './todo.interface';
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

export async function updateTodo(
    todoId: string,
    updateData: UpdateTodoDTO,
    userId: string
): Promise<TodoResponse | null> {
    const result = await Todo.findOneAndUpdate(
        {
            _id: new Types.ObjectId(todoId),
            user: new Types.ObjectId(userId)
        },
        updateData,
        { new: true }
    );
    if (!result) {
        return null
    };

    return {
        id: result.id,
        title: result.title,
        description: result.description || '',
        status: result.completed ? 'completed' : 'pending',
        dueDate: result.dueDate,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
    };
}

export async function getTodoDetails(
    todoId: string,
    userId: string
): Promise<TodoResponse | null> {
    const todo = await Todo.findOne({
        _id: todoId,
        user: userId
    });
    if (!todo) {
        return null
    };
    return {
        id: todo.id,
        title: todo.title,
        description: todo.description || '',
        status: todo.completed ? 'completed' : 'pending',
        dueDate: todo.dueDate,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
    };
}