import { Router } from 'express';
import { createTodoSchema, updateTodoSchema } from './todo.validator';
import { validateRequestBody } from '../../middlewares/validate.middleware';
import { createTodo, deleteTodo, getTodo, listTodos, updateTodo } from './todo.controller';

const router = Router();

router.post('/add', validateRequestBody(createTodoSchema), createTodo);
router.put('/update/:id', validateRequestBody(updateTodoSchema), updateTodo);
router.get('/get/:id', getTodo);
router.get('/list', listTodos);
router.delete('/delete/:id', deleteTodo);

export default router;
