import { LaunchModel, LaunchSchema } from "../../models/Launch";
import {
  amountLaunchesInMemory,
  launchesInDBInMemory,
} from "../../utils/memoryCache";
import { Query, createFilter } from "./utils/createFilter";

export const getAmountLaunchesInDB = async (params?: {
  search?: Query["search"];
  results?: Query["results"];
}) => {
  if (!amountLaunchesInMemory.hasItem("totalLaunchesInDB")) {
    const total = await LaunchModel.find(
      createFilter(params?.search, params?.results)
    ).countDocuments();
    // storeExpiringItem(key: string, value: number, timeToLiveInSecs: number)
    amountLaunchesInMemory.storeExpiringItem("totalLaunchesInDB", total, 10);
  }
  return amountLaunchesInMemory.retrieveItemValue("totalLaunchesInDB");
};

export const listFiltredLaunches = async (params?: Query) => {
  if (!launchesInDBInMemory.hasItem(`launches-${params?.search}`)) {
    const launches = await LaunchModel.find(
      createFilter(params?.search, params?.results)
    )
      .sort({ id: "desc" })
      .limit(params?.limit)
      .skip((params?.page - 1) * params?.limit);

    launchesInDBInMemory.storeExpiringItem(
      `launches-${params?.search}`,
      launches as Array<LaunchSchema>,
      10
    );
  }
  return launchesInDBInMemory.retrieveItemValue(`launches-${params?.search}`);
};
