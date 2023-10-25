import express from "express";
import cron from "node-cron";
import swaggerUi from "swagger-ui-express";

import { connection } from "./db/conn";
import { getDataFromSpaceX } from "./utils/getDataFromSpaceXAPI";
import { router } from "./routes/routes";
import { seed } from "./utils/seed";

import { swaggerDef } from "./swaggerDef";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDef));

app.use("/", router);

const start = async () => {
  try {
    await connection();
    await seed();
    cron.schedule(
      "0 9 * * *",
      async () => {
        await getDataFromSpaceX();
      },
      {
        scheduled: true,
        timezone: "America/Sao_Paulo",
      }
    );

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
