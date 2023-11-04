import { SpaceXLaunches } from "../../spaceX";

export const fetchLaunches: () => Promise<Array<SpaceXLaunches>> = async () => {
  try {
    return process.env.NODE_ENV === "test"
      ? (
          (await (
            await fetch("https://api.spacexdata.com/v5/launches")
          ).json()) as Array<SpaceXLaunches>
        ).filter((_, index) => index < 5)
      : ((await (
          await fetch("https://api.spacexdata.com/v5/launches")
        ).json()) as Array<SpaceXLaunches>);
  } catch (error) {
    console.log("Error at fetching launches", error);
    throw new Error(error.message);
  }
};
