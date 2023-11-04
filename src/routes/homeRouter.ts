import express from "express";
import { home } from "../controllers/home";
import { checkExact, checkSchema } from "express-validator";
import { validationHomeSchema } from "./validations";

const homeRouter = express.Router();

homeRouter.get(
  "/",
  checkExact(checkSchema(validationHomeSchema), {
    message: "Any param is permitted",
  }),
  home
);

export { homeRouter };
