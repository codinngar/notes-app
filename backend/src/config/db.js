import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Faild to connect to database:", error);
    process.exit(1);
  }
};
