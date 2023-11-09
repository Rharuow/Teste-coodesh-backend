import { launchesInMemory } from "../../memoryCache";
import { SpaceXLaunches } from "../../spaceX";

export const getLaunches = async () => {
  if (!launchesInMemory.hasItem("launchesBySpaceXAPI")) {
    const launches =
      process.env.NODE_ENV === "test"
        ? (
            (await (
              await fetch("https://api.spacexdata.com/v5/launches")
            ).json()) as Array<SpaceXLaunches>
          ).filter((_, index) => index < 5)
        : ((await (
            await fetch("https://api.spacexdata.com/v5/launches")
          ).json()) as Array<SpaceXLaunches>);
    // storeExpiringItem(key: string, value: SpaceXLaunches[], timeToLiveInSecs: number)
    launchesInMemory.storeExpiringItem("launchesBySpaceXAPI", launches, 10);
  }
  return launchesInMemory.retrieveItemValue("launchesBySpaceXAPI");
};

export const fetchLaunches: () => Promise<Array<SpaceXLaunches>> = async () => {
  try {
    return await getLaunches();
  } catch (error) {
    throw new Error(error.message);
  }
};
