import { LaunchModel } from "../models/Launch";
import { RocketModel } from "../models/Rocket";
import { getAmountLaunchesInDB } from "../repositories/launch";

import { fetchLaunches } from "./api/spaceX/listLaunches";
import { fetchRockets } from "./api/spaceX/listRockets";
import { amountLaunchesInMemory } from "./memoryCache";

export const seed: () => Promise<
  "launches are loaded" | "launches pushed"
> = async () => {
  try {
    // get amount of Launches
    const totalLaunches = await getAmountLaunchesInDB();

    if (totalLaunches > 0) return "launches are loaded";

    amountLaunchesInMemory.clear();

    // get launches from public api SpaceX
    const launchesFromSpaceXAPI = await fetchLaunches();

    // get rockets from public api SpaceX
    const rocketsFromSpaceXAPI = await fetchRockets(launchesFromSpaceXAPI);

    amountLaunchesInMemory.storeExpiringItem(
      "totalLaunchesInDB",
      launchesFromSpaceXAPI.length,
      10
    );

    // save at mongo database all the launches
    await LaunchModel.bulkWrite(
      launchesFromSpaceXAPI.map((launch) => ({
        insertOne: {
          document: {
            ...launch,
            rocket: {
              name: rocketsFromSpaceXAPI.find(
                (rocket) => rocket.id === launch.rocket
              ).name,
              id: launch.rocket,
            },
          },
        },
      }))
    );

    // save at mongo database all the rockets

    await RocketModel.bulkWrite(
      rocketsFromSpaceXAPI.map((rocket) => ({
        insertOne: {
          document: rocket,
        },
      }))
    );

    return "launches pushed";
  } catch (error) {
    throw new Error(error.message);
  }
};
