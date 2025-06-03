import { Application } from 'express';
import authRoutes from '../modules/auth/auth.route';

export const registerRoutes = (app: Application) => {
  app.use('/api/auth', authRoutes);
};
