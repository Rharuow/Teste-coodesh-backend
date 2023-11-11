import { rocketsInMemory } from "../../utils/memoryCache";
import { RocketModel, RocketsSchema } from "../../models/Rocket";

const SECONDSTOEXPIRE = 60 * 5;

export const listRockets = async () => {
  if (!rocketsInMemory.hasItem("rocketsByDB")) {
    const rockets = await RocketModel.find();
    rocketsInMemory.storeExpiringItem(
      "rocketsByDB",
      rockets as Array<RocketsSchema>,
      SECONDSTOEXPIRE
    );
  }
  return rocketsInMemory.retrieveItemValue("rocketsByDB");
};
