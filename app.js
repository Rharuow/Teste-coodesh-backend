import express from "express";
import cron from "node-cron";

import { connection } from "./db/conn.mjs";
import { getDataFromSpaceX } from "./utils/getDataFromSpaceXAPI.mjs";
import { router } from "./routes/routes.mjs";
import { getAllLaunches } from "./utils/getAllLaunches.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/", router);

const start = async () => {
  try {
    await connection();
    cron.schedule("* * * * *", async () => {
      await getAllLaunches();
    });
    cron.schedule(
      "0 9 * * *",
      async () => {
        console.log("updating data from SpaceX");
        const status = await getDataFromSpaceX();
        console.log(status);
      },
      {
        scheduled: true,
        timezone: "America/Sao_Paulo",
      }
    );

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

export { app };
