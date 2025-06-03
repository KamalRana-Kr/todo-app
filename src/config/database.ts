
import mongoose from 'mongoose';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/db_todo';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoUri);
    console.log("The Todo database is connected");
  } catch (error) {
    console.error("The database connection error:", error);
    process.exit(1);
  }
};
