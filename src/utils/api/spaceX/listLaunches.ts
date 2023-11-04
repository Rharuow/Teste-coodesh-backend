import { SpaceXLaunches } from "../../spaceX";

export const fetchLaunches: () => Promise<Array<SpaceXLaunches>> = async () => {
  try {
    return (await (
      await fetch("https://api.spacexdata.com/v5/launches")
    ).json()) as Array<SpaceXLaunches>;
  } catch (error) {
    console.log("Error at fetching launches", error);
    throw new Error(error.message);
  }
};
