import express from "express";
import { launchesList } from "../controllers/launches.mjs";

const launchesRouter = express.Router();

launchesRouter.get("/", launchesList);

export { launchesRouter };
