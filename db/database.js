import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${connection.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
