import { LaunchModel } from "../models/Launch";
import { amountLaunchesInMemory } from "../utils/memoryCache";

export const getAmountLaunchesInDB = async () => {
  if (!amountLaunchesInMemory.hasItem("totalLaunchesInDB")) {
    const total = await LaunchModel.countDocuments();
    // storeExpiringItem(key: string, value: number, timeToLiveInSecs: number)
    amountLaunchesInMemory.storeExpiringItem("totalLaunchesInDB", total, 10);
  }
  return amountLaunchesInMemory.retrieveItemValue("totalLaunchesInDB");
};
