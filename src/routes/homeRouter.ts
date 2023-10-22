import express from "express";
import { home } from "../controllers/home";

const homeRouter = express.Router();
/**
 * @swagger
 * /v1/frameagreements:
 *  get:
 *    tags:
 *      - Frame Agreements
 *    summary: Retrieve a list of Frame Agreements.
 *    description: Retrieve a list of all Lease Objects. The sensitive information is removed from the results.
 */
homeRouter.get("/", home);

export { homeRouter };
