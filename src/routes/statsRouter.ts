import express from "express";
import { barStats, pieStats } from "../controllers/stats";
import { checkExact, checkSchema } from "express-validator";
import {
  validationStatsBarSchemes,
  validationStatsPieSchemes,
} from "./validations";
import { resultValidationParams } from "../middleware/stats/pie";

const statsRouter = express.Router();

statsRouter.get(
  "/pie",
  checkExact(checkSchema(validationStatsPieSchemes)),
  (req, res, next) => resultValidationParams(req, res, next),
  pieStats
);
statsRouter.get(
  "/bar",
  checkExact(checkSchema(validationStatsBarSchemes)),
  barStats
);

export { statsRouter };
