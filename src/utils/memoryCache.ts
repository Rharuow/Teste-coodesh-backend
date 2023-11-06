import { MemoryCache } from "memory-cache-node";
import { RocketType, SpaceXLaunches } from "./spaceX";

export const lastLaunchesInMemory = new MemoryCache<string, SpaceXLaunches>(
  10, // time in seconds to expire items
  2 // number of items
);

export const launchesInMemory = new MemoryCache<string, Array<SpaceXLaunches>>(
  10, // time in seconds to expire items
  2 // number of items
);

export const rocketsInMemory = new MemoryCache<string, Array<RocketType>>(
  10, // time in seconds to expire items
  2 // number of items
);

export const amountLaunchesInMemory = new MemoryCache<string, number>(
  10, // time in seconds to expire items
  2 // number of items
);

export const environmentMemory = new MemoryCache<string, string>(1, 1); // (itemsExpirationCheckIntervalInSecs: number, maxItemCount: number)
