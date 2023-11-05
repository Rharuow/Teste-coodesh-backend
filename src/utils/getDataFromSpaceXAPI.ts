import { LaunchModel } from "../models/Launch";
import { SpaceXLaunches } from "./spaceX";
import { lastLaunches } from "./memoryCache";

// Methods to get data from space x public api
export const getDataFromSpaceX: () => Promise<
  "data pushed from spacex api" | "data already updated"
> = async () => {
  try {
    // Verifing if has data from space x api on cache
    if (!lastLaunches.hasItem("lastLaunchInSpaceX")) {
      const launchData = await fetch(
        "https://api.spacexdata.com/v5/launches/latest"
      );

      // parse launch data into json
      const launch = (await launchData.json()) as SpaceXLaunches;

      // Set at cache the data from space x api
      lastLaunches.storeExpiringItem(
        "lastLaunchInSpaceX",
        launch,
        60 * 60 /* 1 hour */
      );
    }

    // Verifing if has data from mongoDB on cache
    if (!lastLaunches.hasItem("lastLaunchInDB")) {
      lastLaunches.storePermanentItem(
        "lastLaunchInDB",
        await LaunchModel.findOne({
          id: lastLaunches.retrieveItemValue("lastLaunchInSpaceX").id,
        })
      );
    }

    const launchAlreadyExists =
      lastLaunches.retrieveItemValue("lastLaunchInDB");

    // if dont exist, create
    if (launchAlreadyExists === null) {
      await LaunchModel.create(
        lastLaunches.retrieveItemValue("lastLaunchInSpaceX")
      );
      return "data pushed from spacex api";
    }

    return "data already updated";
  } catch (error) {
    return error;
  }
};
