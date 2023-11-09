import "module-alias/register";
import express from "express";
import cron from "node-cron";
import swaggerUi from "swagger-ui-express";
import ExpressMongoSanitize from "express-mongo-sanitize";
import cors from "cors";

import { connection } from "./db/conn";
import { getDataFromSpaceX } from "./utils/getDataFromSpaceXAPI";
import { router } from "./routes/routes";
import { seed } from "./utils/seed";

import { swaggerDef } from "./swaggerDef";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

// Create a instance of express services
const app = express();

// Adding middleware cores to express services
app.use(cors());

// middleware to sanitize params sent to mongodb
app.use(ExpressMongoSanitize());

// Adding middleware to accept json at body requests and limiting 10kb
app.use(express.json({ limit: "10kb" }));

app.use((_, res, next) => {
  if (
    mongoose.connection.readyState > 2 &&
    mongoose.connection.readyState === 0
  )
    return res.status(412).send("DB connection lost");
  return next();
});

// Adding middleware to create routes to docs generated by swagger.
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDef));

// Adding middleware to instance of all the routes.
app.use("/", router);

// Methods to start server.
const start = async () => {
  try {
    // create connection with mongoDB
    await connection();

    // Feeding the db with spaceX public API
    await seed();

    // Creating a CRON to update data from spaceX public API get every day at 9:00 AM
    cron.schedule(
      " 0 9 * * *",
      async () => {
        // Methods that update data from spaceX public API.
        await getDataFromSpaceX();
      },
      {
        scheduled: true,
        timezone: "America/Sao_Paulo",
      }
    );

    // Method to make express service start to listen requests in port defined by const PORT.
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

export { app };
