import { MemoryCache } from "memory-cache-node";
import { RocketType, SpaceXLaunches } from "./spaceX";

/* Creates a memory cache for items which has string keys and Launch values. Memory cache checks expiring items every 1 seconds. The maximum number of items in the cache is 2. */
const ITEMSEXPIRATIONCHECKINTERVALINSECS = 1; // seconds
const MAXITEMCOUNT = 2;

export const lastLaunchesInMemory = new MemoryCache<string, SpaceXLaunches>(
  ITEMSEXPIRATIONCHECKINTERVALINSECS,
  MAXITEMCOUNT
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
  1 // number of items
);

export const environmentMemory = new MemoryCache<string, string>(1, 1); // (itemsExpirationCheckIntervalInSecs: number, maxItemCount: number)
