import { Router } from "express";

import { homeRouter } from "./homeRouter";
import { launchesRouter } from "./launchesRoute";
import { statsRouter } from "./statsRouter";

const router = Router();

router.use("/", homeRouter);
router.use("/launches", launchesRouter);
router.use("/stats", statsRouter);

export { router };
