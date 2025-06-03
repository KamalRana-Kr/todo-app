import { Router } from 'express';
import { signupSchema, loginSchema } from './auth.validator';
import { validateRequestBody } from '../../middlewares/validate.middleware';
import { signup, login } from './auth.controller';

const router = Router();

router.post('/signup', validateRequestBody(signupSchema), signup);
router.post('/login', validateRequestBody(loginSchema), login);

export default router;