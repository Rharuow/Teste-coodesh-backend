import express from "express";
import { home } from "../controllers/home.mjs";

const homeRouter = express.Router();

homeRouter.get("/", home);

export { homeRouter };
