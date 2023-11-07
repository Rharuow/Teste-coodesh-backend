import { rocketsInMemory } from "../../utils/memoryCache";
import { RocketModel, RocketsSchema } from "../../models/Rocket";

export const listRockets = async () => {
  if (!rocketsInMemory.hasItem("rocketsByDB")) {
    const rockets = await RocketModel.find();
    rocketsInMemory.storeExpiringItem(
      "rocketsByDB",
      rockets as Array<RocketsSchema>,
      10
    );
  }
  return rocketsInMemory.retrieveItemValue("rocketsByDB");
};
