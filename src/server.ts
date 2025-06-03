import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { connectDB } from './config/database';

const PORT: string = process.env.PORT || '5000';

const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
