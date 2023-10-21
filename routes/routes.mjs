import { homeRouter } from "./homeRouter.mjs";
import { Router } from "express";
import { launchesRouter } from "./launchesRoute.mjs";

const router = Router();

router.use("/", homeRouter);
router.use("/launches", launchesRouter);

export { router };
