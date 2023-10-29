import { MemoryCache } from "memory-cache-node";
import { SpaceXLaunches } from "./spaceX";

/* Creates a memory cache for items which has string keys and Launch values. Memory cache checks expiring items every 1 seconds. The maximum number of items in the cache is 2. */
const ITEMSEXPIRATIONCHECKINTERVALINSECS = 1; // seconds
const MAXITEMCOUNT = 2;

export const lastLaunches = new MemoryCache<string, SpaceXLaunches>(
  ITEMSEXPIRATIONCHECKINTERVALINSECS,
  MAXITEMCOUNT
);
