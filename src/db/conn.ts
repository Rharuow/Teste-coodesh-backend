import "dotenv/config";
import mongoose from "mongoose";

async function connection() {
  try {
    console.log("MONGODB_CONNECTION = ", process.env.MONGODB_CONNECTION);
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_CONNECTION || "");
    console.log("conectado ao banco");
  } catch (error: any) {
    console.log(error);
    throw new Error(`error to connect mongoose : ${error.message}`);
  }
}

export { connection };
