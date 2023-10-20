import express from "express";
import { connection } from "./db/conn.mjs";
import { homeRouter } from "./routes/home.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/", homeRouter);

const start = async () => {
  try {
    await connection();
    app.listen(PORT, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
