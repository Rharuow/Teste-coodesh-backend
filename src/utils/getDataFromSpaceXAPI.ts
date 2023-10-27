import { LaunchModel } from "../models/Launch";
import { SpaceXLaunches } from "./spaceX";

export const getDataFromSpaceX: () => Promise<
  "data pushed from spacex api" | "data already updated"
> = async () => {
  try {
    const launch = (await (
      await fetch("https://api.spacexdata.com/v5/launches/latest")
    ).json()) as SpaceXLaunches;

    const launchAlreadyExists = await LaunchModel.findOne({ id: launch.id });

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
