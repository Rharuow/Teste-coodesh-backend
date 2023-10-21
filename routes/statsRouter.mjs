import express from "express";
import { barStats, pizzaStats } from "../controllers/stats.mjs";

const statsRouter = express.Router();

statsRouter.get("/pizza", pizzaStats);
statsRouter.get("/bar", barStats);

export { statsRouter };
