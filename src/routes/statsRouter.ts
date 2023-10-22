import express from "express";
import { barStats, pieStats } from "../controllers/stats";

const statsRouter = express.Router();

statsRouter.get("/pie", pieStats);
statsRouter.get("/bar", barStats);

export { statsRouter };
