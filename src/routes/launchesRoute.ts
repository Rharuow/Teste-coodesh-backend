import express from "express";
import { launchesList } from "../controllers/launches";
import { checkExact, checkSchema } from "express-validator";
import { schema } from "./validations";

const launchesRouter = express.Router();

launchesRouter.get(
  "/",
  checkExact(checkSchema(schema), { message: "Param not permitted" }),
  launchesList
);

export { launchesRouter };
