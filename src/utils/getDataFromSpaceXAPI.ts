import { LaunchModel } from "../models/Launch";
import { SpaceXLaunches } from "./spaceX";
import { lastLaunchesInMemory } from "./memoryCache";

// Methods to get data from space x public api
export const getDataFromSpaceX: () => Promise<
  "data pushed from spacex api" | "data already updated"
> = async () => {
  try {
    // Verifing if has data from space x api on cache
    if (!lastLaunchesInMemory.hasItem("lastLaunchInSpaceX")) {
      const launchData = await fetch(
        "https://api.spacexdata.com/v5/launches/latest"
      );

      // parse launch data into json
      const launch = (await launchData.json()) as SpaceXLaunches;

      // Set at cache the data from space x api
      lastLaunchesInMemory.storeExpiringItem(
        "lastLaunchInSpaceX",
        launch,
        60 * 60 /* 1 hour */
      );
    }

    // Verifing if has data from mongoDB on cache
    if (!lastLaunchesInMemory.hasItem("lastLaunchInDB")) {
      lastLaunchesInMemory.storePermanentItem(
        "lastLaunchInDB",
        await LaunchModel.findOne({
          id: lastLaunchesInMemory.retrieveItemValue("lastLaunchInSpaceX").id,
        })
      );
    }

    const launchAlreadyExists =
      lastLaunchesInMemory.retrieveItemValue("lastLaunchInDB");

    // if dont exist, create
    if (launchAlreadyExists === null) {
      await LaunchModel.create(
        lastLaunchesInMemory.retrieveItemValue("lastLaunchInSpaceX")
      );
      return "data pushed from spacex api";
    }

    return "data already updated";
  } catch (error) {
    return error;
  }
};
