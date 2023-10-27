import express from "express";
import { barStats, pieStats } from "../controllers/stats";
import { checkExact, checkSchema } from "express-validator";
import { validationStatsPieSchemes } from "./validations";

const statsRouter = express.Router();

statsRouter.get(
  "/pie",
  checkExact(checkSchema(validationStatsPieSchemes)),
  pieStats
);
statsRouter.get("/bar", barStats);

export { statsRouter };
