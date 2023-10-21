import { LauncheModel } from "../models/Launche.mjs";

export const getAllLaunches = async () => {
  try {
    const launches = await (
      await fetch("https://api.spacexdata.com/v5/launches")
    ).json();

    console.log(launches);

    return "launches pushed";
  } catch (error) {
    console.log("error = ", error);
  }
};
