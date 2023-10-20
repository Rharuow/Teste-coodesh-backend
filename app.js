import express from "express";
import { connection } from "./db/conn.mjs";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ message: "Fullstack Challenge 🏅 - Space X API" });
});

const start = async () => {
  try {
    await connection();
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
