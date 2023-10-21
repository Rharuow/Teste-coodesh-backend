import { LaunchModel } from "../models/Launch.mjs";

export const getAllLaunches = async () => {
  try {
    const launchesMongo = await LaunchModel.find();

    if (launchesMongo.length > 0) return "launches are loaded";

    const launches = await (
      await fetch("https://api.spacexdata.com/v5/launches")
    ).json();

    await LaunchModel.insertMany(launches);

    return "launches pushed";
  } catch (error) {
    console.log("error = ", error);
  }
};
