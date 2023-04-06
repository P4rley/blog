import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    console.log("Can't connect to db");
  }
};
