import { LaunchModel } from "../models/Launch";
import { RocketModel } from "../models/Rocket";

import { fetchLaunches } from "./api/spaceX/listLaunches";
import { fetchRockets } from "./api/spaceX/listRockets";

export const seed: () => Promise<
  "launches are loaded" | "launches pushed"
> = async () => {
  try {
    // get amount of Launches
    const totalLaunches = await LaunchModel.count();

    if (totalLaunches > 0) return "launches are loaded";

    // get launches from public api SpaceX
    const launchesFromSpaceXAPI = await fetchLaunches();

    // get rockets from public api SpaceX
    const rocketsFromSpaceXAPI = await fetchRockets(launchesFromSpaceXAPI);

    // save at mongo database all the launches
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

    // save at mongo database all the rockets
    await RocketModel.insertMany(rocketsFromSpaceXAPI);

    return "launches pushed";
  } catch (error) {
    throw new Error(error.message);
  }
};
