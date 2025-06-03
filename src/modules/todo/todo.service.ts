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

export async function getTodosByUser(
    userId: Types.ObjectId | string,
    page: number = 1,
    limit: number = 10,
    status?: string
): Promise<{ todos: TodoResponse[]; total: number }> {
    const skip = (page - 1) * limit;

    const matchFilter: any = {
        user: new Types.ObjectId(userId),
    };

    if (status === 'true') {
        matchFilter.completed = true;
    } else if (status === 'false') {
        matchFilter.completed = false;
    }

    const total = await Todo.countDocuments(matchFilter);

    const todosList = await Todo.aggregate<TodoResponse>([
        { $match: matchFilter },
        { $sort: { dueDate: 1 } },
        { $skip: skip },
        { $limit: limit },
        {
            $project: {
                _id: 0,
                id: { $toString: '$_id' },
                title: 1,
                description: 1,
                status: {
                    $cond: [{ $eq: ['$completed', true] }, 'completed', 'pending'],
                },
                dueDate: 1,
                createdAt: 1,
                updatedAt: 1,
            },
        },
    ]);

    return { todos: todosList, total };
}

export async function removeTodo(
    todoId: string,
    userId: string
): Promise<boolean> {
    const todo = await Todo.findOne({
        _id: todoId,
        user: userId
    });
    if (!todo) {
        return false;
    }
    await Todo.findOneAndDelete({
        _id: todoId,
        user: userId
    });
    return true;
}
