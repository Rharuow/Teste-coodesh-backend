import "dotenv/config";
import mongoose from "mongoose";

async function connection() {
  try {
    mongoose.set("strictQuery", true);
    if (process.env.NODE_ENV === "test")
      return await mongoose.connect(process.env.MONGODB_CONNECTION_TEST);
    return await mongoose.connect(process.env.MONGODB_CONNECTION || "");
  } catch (error: any) {
    console.log("error to connect mongoose ", error);
    throw new Error(`error to connect mongoose : ${error.message}`);
  }
}

export { connection };
