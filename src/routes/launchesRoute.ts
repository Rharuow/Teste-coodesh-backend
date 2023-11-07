import express from "express";
import { launchesList } from "../controllers/launches";
import { checkExact, checkSchema } from "express-validator";
import { validationLaunchSchema } from "./validations";
import { handleLaunch } from "@/middleware/launch/list";

const launchesRouter = express.Router();

launchesRouter.get(
  "/",
  checkExact(checkSchema(validationLaunchSchema), {
    message: "Param not permitted",
  }),
  (req, res, next) => handleLaunch(req, res, next),
  launchesList
);

export { launchesRouter };
