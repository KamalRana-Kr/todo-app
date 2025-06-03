import Joi from 'joi';

export const createTodoSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().optional(),
    dueDate: Joi.date().required(),
});

export const updateTodoSchema = Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    dueDate: Joi.date().optional(),
    completed: Joi.boolean().optional(),
});