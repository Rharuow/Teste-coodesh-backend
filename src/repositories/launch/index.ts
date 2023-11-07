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

export const listFiltredLaunches = async (params: Query) => {
  const { limit = 10, page = 1, results, search } = params;
  if (!launchesInDBInMemory.hasItem(`launches-${search}`)) {
    const launches = await LaunchModel.find(createFilter(search, results))
      .sort({ id: "desc" })
      .limit(limit)
      .skip((page - 1) * limit);

    launchesInDBInMemory.storeExpiringItem(
      `launches-${search}`,
      launches as Array<LaunchSchema>,
      10
    );
  }
  return launchesInDBInMemory.retrieveItemValue(`launches-${search}`);
};
