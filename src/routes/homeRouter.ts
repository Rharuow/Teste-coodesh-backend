import express from "express";
import { home } from "../controllers/home";
import { checkExact, checkSchema } from "express-validator";
import { validationHomeSchema } from "./validations";
import { validationQueryParams } from "../middleware/home";

const homeRouter = express.Router();

homeRouter.get(
  "/",
  checkExact(checkSchema(validationHomeSchema), {
    message: "Any param is permitted",
  }),
  (req, res, next) => validationQueryParams(req, res, next),
  home
);

export { homeRouter };
