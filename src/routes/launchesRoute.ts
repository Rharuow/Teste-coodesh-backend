import express from "express";
import { launchesList } from "../controllers/launches";
import { checkExact, checkSchema } from "express-validator";
import { validationLaunchSchema } from "./validations";
import { validationQueryParams } from "../middleware/launch/list";

const launchesRouter = express.Router();

launchesRouter.get(
  "/",
  // Middleware to check each launch request query parameters
  checkExact(checkSchema(validationLaunchSchema), {
    message: "Param not permitted",
  }),
  // Middleware to make validation of the previous step has some error
  (req, res, next) => validationQueryParams(req, res, next),
  launchesList
);

export { launchesRouter };
