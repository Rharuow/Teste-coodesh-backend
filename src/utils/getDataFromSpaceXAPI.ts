import { MemoryCache } from "memory-cache-node";
import { LaunchModel } from "../models/Launch";
import { SpaceXLaunches } from "./spaceX";

export const getDataFromSpaceX: () => Promise<
  "data pushed from spacex api" | "data already updated"
> = async () => {
  /* Creates a memory cache for items which has string keys and Launch values. Memory cache checks expiring items every 86400 seconds (i.e. every 1 day) The maximum number of items in the cache is 1. */

  const ITEMSEXPIRATIONCHECKINTERVALINSECS = 60 * 60 * 24;
  const MAXITEMCOUNT = 1;

  const lastLaunchInDBCache = new MemoryCache<string, SpaceXLaunches>(
    ITEMSEXPIRATIONCHECKINTERVALINSECS,
    MAXITEMCOUNT
  );

  try {
    const launch = (await (
      await fetch("https://api.spacexdata.com/v5/launches/latest")
    ).json()) as SpaceXLaunches;

    console.log("get by db");

    if (!lastLaunchInDBCache.hasItem("lastLaunch")) {
      lastLaunchInDBCache.storePermanentItem(
        "lastLaunch",
        await LaunchModel.findOne({ id: launch.id })
      );
    }

    const launchAlreadyExists =
      lastLaunchInDBCache.retrieveItemValue("lastLaunch");

    if (launchAlreadyExists === null) {
      await LaunchModel.create(launch);
      return "data pushed from spacex api";
    }

    return "data already updated";
  } catch (error) {
    console.log("error = ", error);
    return error;
  }
};
