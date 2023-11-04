import { LaunchModel } from "../models/Launch";
import { RocketModel } from "../models/Rocket";

import { fetchLaunches } from "./api/spaceX/listLaunches";
import { fetchRockets } from "./api/spaceX/listRockets";

export const seed: () => Promise<
  "launches are loaded" | "launches pushed"
> = async () => {
  try {
    const launchesMongo = await LaunchModel.count();

    if (launchesMongo > 0) return "launches are loaded";

    const launchesFromSpaceXAPI = await fetchLaunches();

    const rocketsFromSpaceXAPI = await fetchRockets(launchesFromSpaceXAPI);

    await LaunchModel.insertMany(
      launchesFromSpaceXAPI.map((launch) => ({
        ...launch,
        rocket: {
          name: rocketsFromSpaceXAPI.find(
            (rocket) => rocket.id === launch.rocket
          )?.name,
          id: launch.rocket,
        },
      }))
    );

    await RocketModel.insertMany(rocketsFromSpaceXAPI);

    return "launches pushed";
  } catch (error) {
    console.log("error = ", error);
    return error;
  }
};
