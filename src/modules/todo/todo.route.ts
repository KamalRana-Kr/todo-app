import { Router } from 'express';
import { createTodoSchema, updateTodoSchema } from './todo.validator';
import { validateRequestBody } from '../../middlewares/validate.middleware';
import { createTodo, getTodo, updateTodo } from './todo.controller';

const router = Router();

router.post('/add', validateRequestBody(createTodoSchema), createTodo);
router.put('/update/:id', validateRequestBody(updateTodoSchema), updateTodo);
router.get('/get/:id', getTodo);

export default router;
