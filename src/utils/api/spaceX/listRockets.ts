import dayjs from "dayjs";
import { generateRandomColor } from "../../generateColor";
import { RocketType, SpaceXLaunches } from "../../spaceX";

export const fetchRockets: (
  launches: Array<SpaceXLaunches>
) => Promise<Array<RocketType>> = async (launches) => {
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
          year: dayjs(launch.date_utc).toDate().getFullYear(),
          success: launch.success ? true : false,
          id: launch.id,
        })),
    };
  }) as Array<RocketType>;
  return rocketsWithLaunches;
};
