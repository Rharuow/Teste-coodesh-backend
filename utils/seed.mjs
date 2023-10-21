import dayjs from "dayjs";
import { LaunchModel } from "../models/Launch.mjs";
import { RocketModel } from "../models/Rocket.mjs";

import { handleColor } from "./generateColor.mjs";

export const seed = async () => {
  try {
    const launchesMongo = await LaunchModel.find();

    if (launchesMongo.length > 0) return "launches are loaded";

    const launches = await (
      await fetch("https://api.spacexdata.com/v5/launches")
    ).json();

    const rockets = launches.reduce((rckts, current) => {
      if (!rckts.some((rcktsLaun) => rcktsLaun.id === current.rocket)) {
        rckts.push({
          name: current.name,
          id: current.rocket,
          color:
            rckts.length === 0
              ? "rgb(255,0,0)"
              : handleColor(rckts[rckts.length - 1].color),
          launches: [
            {
              year: dayjs(current.date_utc).toDate().getFullYear(),
              success: current.success ? true : false,
              id: current.id,
            },
          ],
        });
      } else {
        rckts = rckts.map((rocket) =>
          rocket.id === current.rocket
            ? {
                ...rocket,
                launches: [
                  ...rocket.launches,
                  {
                    year: dayjs(current.date_utc).toDate().getFullYear(),
                    success: current.success ? true : false,
                    id: current.id,
                  },
                ],
              }
            : rocket
        );
      }
      return rckts;
    }, []);

    await LaunchModel.insertMany(launches);

    await RocketModel.insertMany(rockets);

    return "launches pushed";
  } catch (error) {
    console.log("error = ", error);
  }
};
