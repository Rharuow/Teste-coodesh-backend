import express from "express";
import { pizzaStats } from "../controllers/stats.mjs";

const statsRouter = express.Router();

statsRouter.get("/pizza", pizzaStats);

export { statsRouter };
