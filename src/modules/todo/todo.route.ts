import { Router } from 'express';
import { createTodoSchema } from './todo.validator';
import { validateRequestBody } from '../../middlewares/validate.middleware';
import { createTodo } from './todo.controller';

const router = Router();

router.post('/add', validateRequestBody(createTodoSchema), createTodo);

export default router;
