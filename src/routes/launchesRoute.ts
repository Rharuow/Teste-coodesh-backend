import express from "express";
import { launchesList } from "../controllers/launches";

const launchesRouter = express.Router();

launchesRouter.get("/", launchesList);

export { launchesRouter };
