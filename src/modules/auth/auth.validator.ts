import Joi from 'joi';

export const signupSchema = Joi.object({
    firstName: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.base': 'First name must be a string',
            'string.empty': 'First name is required',
            'string.min': 'First name must be at least 2 characters long',
            'string.max': 'First name must be at most 50 characters long',
            'any.required': 'First name is required'
        }),

    lastName: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.base': 'Last name must be a string',
            'string.empty': 'Last name is required',
            'string.min': 'Last name must be at least 2 characters long',
            'string.max': 'Last name must be at most 50 characters long',
            'any.required': 'Last name is required'
        }),

    email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required()
        .messages({
            'string.email': 'Please enter a valid email address',
            'string.empty': 'Email is required',
            'any.required': 'Email is required'
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.base': 'Password must be a string',
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 6 characters long',
            'any.required': 'Password is required'
        }),

    isActive: Joi.boolean().optional()
});


export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
