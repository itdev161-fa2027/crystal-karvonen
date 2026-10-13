import mongoose from 'mongoose';
import config from 'config';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.MONGO_URI || config.get('mongoURI'); //gt connection string

const connectDB = async () => { //connect to mongoDB
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;