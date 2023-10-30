import dayjs from "dayjs";
import { LaunchModel } from "../models/Launch";
import { RocketModel } from "../models/Rocket";

import { generateRandomColor } from "./generateColor";
import { SpaceXLaunches } from "./spaceX";

type RocketType = {
  id: string;
  name: string;
  color: string;
  launches: [
    {
      year: string | number;
      success: boolean;
      id: string;
    }
  ];
};

export const seed: () => Promise<
  "launches are loaded" | "launches pushed"
> = async () => {
  try {
    const launchesMongo = await LaunchModel.find();

    if (launchesMongo.length > 0) return "launches are loaded";

    const launches = (await (
      await fetch("https://api.spacexdata.com/v5/launches")
    ).json()) as Array<SpaceXLaunches>;

    const rocketsFromSpaceXAPI = (await (
      await fetch("https://api.spacexdata.com/v4/rockets")
    ).json()) as Array<{ id: string; name: string }>;

    const rockets = launches.reduce((rckts, current) => {
      if (!rckts.some((rcktsLaun) => rcktsLaun.id === current.rocket)) {
        rckts.push({
          name: String(
            rocketsFromSpaceXAPI.find(
              (rocktFromSpXAPI) => rocktFromSpXAPI.id === current.rocket
            )?.name
          ),
          id: current.rocket,
          color:
            rckts.length === 0
              ? "rgb(255,0,0)"
              : generateRandomColor(rckts[rckts.length - 1].color),
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
        ) as Array<RocketType>;
      }
      return rckts;
    }, [] as Array<RocketType>);

    await LaunchModel.insertMany(
      launches.map((launch) => ({
        ...launch,
        rocket: {
          name: rockets.find((rocket) => rocket.id === launch.rocket)?.name,
          id: launch.rocket,
        },
      }))
    );

    await RocketModel.insertMany(rockets);

    return "launches pushed";
  } catch (error) {
    console.log("error = ", error);
    return error;
  }
};
