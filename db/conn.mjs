import mongoose from "mongoose";

async function connection() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://rharuow:ENDX9zss.2250667@cluster0.ltf0byt.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("conectado ao banco");
  } catch (error) {
    console.log(error);
    throw new Error(`error to connect mongoose : ${error.message}`);
  }
}

export { connection };
