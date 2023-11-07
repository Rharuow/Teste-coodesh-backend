import { MemoryCache } from "memory-cache-node";
import { SpaceXLaunches } from "./spaceX";
import { LaunchSchema } from "../models/Launch";
import { RocketsSchema } from "@models/Rocket";

export const lastLaunchesInMemory = new MemoryCache<string, SpaceXLaunches>(
  10, // time in seconds to expire items
  2 // number of items
);

export const launchesInDBInMemory = new MemoryCache<
  string,
  Array<LaunchSchema>
>(10, 1000);

export const launchesInMemory = new MemoryCache<string, Array<SpaceXLaunches>>(
  10, // time in seconds to expire items
  2 // number of items
);

export const rocketsInMemory = new MemoryCache<string, Array<RocketsSchema>>(
  10, // time in seconds to expire items
  2 // number of items
);

export const amountLaunchesInMemory = new MemoryCache<string, number>(
  10, // time in seconds to expire items
  2 // number of items
);

export const environmentMemory = new MemoryCache<string, string>(1, 1); // (itemsExpirationCheckIntervalInSecs: number, maxItemCount: number)
