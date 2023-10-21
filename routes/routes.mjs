import { homeRouter } from "./homeRouter.mjs";
import { Router } from "express";
import { launchesRouter } from "./launchesRoute.mjs";
import { statsRouter } from "./statsRouter.mjs";

const router = Router();

router.use("/", homeRouter);
router.use("/launches", launchesRouter);
router.use("/stats", statsRouter);

export { router };
