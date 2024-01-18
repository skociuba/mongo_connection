import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      const mongodbUri = process.env.MONGODB_URI;

      await mongoose.connect(mongodbUri!);
      console.log('db connected');
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
