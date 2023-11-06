import dayjs from "dayjs";
import { generateRandomColor } from "../../generateColor";
import { RocketType, SpaceXLaunches } from "../../spaceX";
import { rocketsInMemory } from "../../memoryCache";

const getRockets = async () => {
  if (!rocketsInMemory.hasItem("rocketsBySpaceXAPI")) {
    const rockets = (
      (await (
        await fetch("https://api.spacexdata.com/v4/rockets")
      ).json()) as Array<RocketType>
    ).map((rocket) => ({
      color: "rgb(255,0,0)",
      launches: [],
      name: rocket.name,
      id: rocket.id,
    }));
    // storeExpiringItem(key: string, value: SpaceXLaunches[], timeToLiveInSecs: number)
    rocketsInMemory.storeExpiringItem(
      "rocketsBySpaceXAPI",
      rockets as Array<RocketType>,
      10
    );
  }
  return rocketsInMemory.retrieveItemValue("rocketsBySpaceXAPI");
};

export const fetchRockets: (
  launches: Array<SpaceXLaunches>
) => Promise<Array<RocketType>> = async (launches) => {
  const rockets = await getRockets();

  const rocketsWithLaunches = rockets.map((rocket, index, self) => {
    return {
      ...rocket,
      color:
        index === 0
          ? "rgb(255,0,0)"
          : generateRandomColor(self[index - 1].color),
      launches: launches
        .filter((launch) => launch.rocket === rocket.id)
        .map((launch) => ({
          year: dayjs(launch.date_utc).toDate().getFullYear().toString(),
          success: launch.success ? true : false,
          id: launch.id,
        })),
    };
  }) as Array<RocketType>;
  return rocketsWithLaunches;
};
