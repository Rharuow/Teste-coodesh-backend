import "dotenv/config";
import mongoose from "mongoose";

async function connection() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_CONNECTION || "");
  } catch (error: any) {
    console.log(error);
    throw new Error(`error to connect mongoose : ${error.message}`);
  }
}

export { connection };
