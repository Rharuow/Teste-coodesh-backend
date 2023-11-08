import express from "express";
import { barStats, pieStats } from "../controllers/stats";
import { checkExact, checkSchema } from "express-validator";
import {
  validationStatsBarSchemes,
  validationStatsPieSchemes,
} from "./validations";
import { resultValidationParamsPie } from "../middleware/stats/pie";
import { resultValidationParamsBar } from "../middleware/stats/bar";

const statsRouter = express.Router();

statsRouter.get(
  "/pie",
  checkExact(checkSchema(validationStatsPieSchemes)),
  (req, res, next) => resultValidationParamsPie(req, res, next),
  pieStats
);
statsRouter.get(
  "/bar",
  checkExact(checkSchema(validationStatsBarSchemes)),
  (req, res, next) => resultValidationParamsBar(req, res, next),
  barStats
);

export { statsRouter };
