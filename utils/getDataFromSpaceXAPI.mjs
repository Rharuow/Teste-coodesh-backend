import { LauncheModel } from "../models/Launche.mjs";

export const getDataFromSpaceX = async () => {
  try {
    const launche = await (
      await fetch("https://api.spacexdata.com/v5/launches/latest")
    ).json();

    const launcheAlreadyExists = await LauncheModel.findOne({ id: launche.id });

    if (launcheAlreadyExists === null) {
      await LauncheModel.create(launche);
      return "data pushed from spacex api";
    }

    return "data already updated";
  } catch (error) {
    console.log("error = ", error);
  }
};
