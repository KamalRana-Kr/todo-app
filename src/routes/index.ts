import { Application } from 'express';
import authRoutes from '../modules/auth/auth.route';
import todoRoutes from '../modules/todo/todo.route';

export const registerRoutes = (app: Application) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/todos', todoRoutes);
};
