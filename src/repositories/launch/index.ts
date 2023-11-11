import { LaunchModel, LaunchSchema } from "../../models/Launch";
import {
  amountLaunchesInMemory,
  launchesInDBInMemory,
} from "../../utils/memoryCache";
import { createCacheMemoryLaunchReference } from "./utils/createCacheMemoryLaunchReference";
import { Query, createFilter } from "./utils/createFilter";

const SECONDSTOEXPIRE = 60 * 5;

export const getAmountLaunchesInDB = async (params?: {
  search?: Query["search"];
  results?: Query["results"];
}) => {
  const reference = `totalLaunchesInDB-${createCacheMemoryLaunchReference(
    params
  )}`;
  if (!amountLaunchesInMemory.hasItem(reference)) {
    const total = await LaunchModel.find(
      createFilter(params?.search, params?.results)
    ).countDocuments();
    // store amount launches in memory cache by reference
    amountLaunchesInMemory.storeExpiringItem(reference, total, SECONDSTOEXPIRE);
  }
  return amountLaunchesInMemory.retrieveItemValue(reference);
};

export const listLaunches = async (params?: Query) => {
  // Method to create a reference to item in memory cache
  const reference = createCacheMemoryLaunchReference(params);
  // verifing if the item exists in the cache
  if (!launchesInDBInMemory.hasItem(reference)) {
    // query to list launches
    const launches = await LaunchModel.find(
      createFilter(params?.search, params?.results)
    )
      .sort({ id: "desc" })
      .limit(params?.limit)
      .skip((params?.page - 1) * params?.limit);

    // store launches in memory cache by reference
    launchesInDBInMemory.storeExpiringItem(
      reference, // reference to the item in memory cache
      launches as Array<LaunchSchema>, //Data stored in memory cache
      SECONDSTOEXPIRE
    );
  }
  // get at memory cache the value referenced
  return launchesInDBInMemory.retrieveItemValue(reference);
};
