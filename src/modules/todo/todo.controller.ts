import { Request, Response, NextFunction } from 'express';
import {
    createTodo as createTodoService,
    getTodoDetails,
    updateTodo as updateTodoService
} from './todo.service';
import { CreateTodoDTO, TodoResponse, UpdateTodoDTO } from './todo.interface';
import { IResponse, AuthRequest } from '../../common/common.interface';
import { HTTP_STATUS_CODES, TODO_MESSAGES } from '../../utils/constants';

//Add Todo
export const createTodo = async (
    req: Request<{}, IResponse<TodoResponse>, CreateTodoDTO>,
    res: Response<IResponse<TodoResponse | null>>,
    next: NextFunction
): Promise<void> => {
    try {
        const authReq = req as AuthRequest;
        console.info(`Received request to create Todo for user: ${authReq.user.userId}`);

        const result = await createTodoService(req.body, authReq.user.userId);

        if (!result) {
            console.warn(`Failed to create Todo for user: ${authReq.user.userId}`);
            res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
                status: HTTP_STATUS_CODES.BAD_REQUEST,
                message: TODO_MESSAGES.TODO_CREATED_SUCCESS,
                data: null
            });
        } else {
            console.info(`Todo created successfully for user: ${authReq.user.userId}`);
            res.status(HTTP_STATUS_CODES.CREATED).json({
                status: HTTP_STATUS_CODES.CREATED,
                message: TODO_MESSAGES.TODO_CREATED_SUCCESS,
                data: result
            });
        }
    } catch (error) {
        console.error("Error in createTodo function while creating Todo details", error);
        next(error);
    }
};

//Update Todo
export const updateTodo = async (
    req: Request<{ id: string }, IResponse<TodoResponse | null>, UpdateTodoDTO>,
    res: Response<IResponse<TodoResponse | null>>,
    next: NextFunction
): Promise<void> => {
    try {
        const authReq = req as AuthRequest;
        const { id } = req.params;

        console.info(`Received request to update Todo with ID: ${id} for user: ${authReq.user.userId}`);

        const result = await updateTodoService(id, req.body, authReq.user.userId);

        if (!result) {
            console.warn(`Todo with ID: ${id} not found for user: ${authReq.user.userId}`);
            res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
                status: HTTP_STATUS_CODES.NOT_FOUND,
                message: TODO_MESSAGES.TODO_NOT_FOUND,
                data: null
            });
        } else {
            console.info(`Todo with ID: ${id} updated successfully for user: ${authReq.user.userId}`);
            res.status(HTTP_STATUS_CODES.OK).json({
                status: HTTP_STATUS_CODES.OK,
                message: TODO_MESSAGES.TODO_UPDATED_SUCCESS,
                data: result
            });
        }
    } catch (error) {
        console.error(`Error in updateTodo function while updating Todo details for Todo ID: ${req.params.id}`, error);
        next(error);
    }
};

//Get Todo
export const getTodo = async (
    req: Request<{ id: string }>,
    res: Response<IResponse<TodoResponse | null>>,
    next: NextFunction
): Promise<void> => {
    try {
        const authReq = req as AuthRequest;
        const { id } = req.params;

        console.info(`Received request to fetch Todo details for Todo ID: ${id} by user: ${authReq.user.userId}`);

        const result = await getTodoDetails(id, authReq.user.userId);

        if (!result) {
            console.warn(`Todo not found for Todo ID: ${id} by user: ${authReq.user.userId}`);
            res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
                status: HTTP_STATUS_CODES.NOT_FOUND,
                message: TODO_MESSAGES.TODO_NOT_FOUND,
                data: null
            });
        } else {
            console.info(`Successfully fetched Todo details for Todo ID: ${id} by user: ${authReq.user.userId}`);
            res.status(HTTP_STATUS_CODES.OK).json({
                status: HTTP_STATUS_CODES.OK,
                message: TODO_MESSAGES.TODO_FETCHED_SUCCESS,
                data: result
            });
        }
    } catch (error) {
        console.error(`Error in getTodo function while fetching Todo details for Todo ID: ${req.params.id}`, error);
        next(error);
    }
};