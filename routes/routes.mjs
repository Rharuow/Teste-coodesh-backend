import { homeRouter } from "./homeRouter.mjs";
import { Router } from "express";

const router = Router();

router.use("/", homeRouter);

export { router };
