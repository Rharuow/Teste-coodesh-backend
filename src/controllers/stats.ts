import { Request, Response } from "express";

import { LaunchModel } from "../models/Launch";
import { RocketModel } from "../models/Rocket";

export const pizzaStats = async (req: Request, res: Response) => {
  try {
    const rockets = await RocketModel.find();

    const totalLaunches = await LaunchModel.count();

    const success = rockets
      .map(
        (rocket) => rocket.launches.filter((launch) => launch.success).length
      )
      .reduce((acc, current) => acc + current, 0);

    const fails = totalLaunches - success;

    return res.json({
      rockets,
      metadata: { success, fails, rocketsTotal: rockets.length },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Sorry, there was an error generating the rocket pizza statistics",
    });
  }
};

interface ILaunch {
  amountLaunches?: number;
  launch_id?: string;
  year?: string;
  id?: string;
  name?: string;
  color?: string;
}

export const barStats = async (req: Request, res: Response) => {
  try {
    const rockets = await RocketModel.find();

    const metadata = rockets.reduce((accLaunchesForYear, currentRocket) => {
      const rocketForYearLuanched = currentRocket.launches.reduce(
        (accLaunches, currentLaunch) => {
          if (accLaunches.some((launch) => launch.year == currentLaunch.year)) {
            accLaunches = accLaunches.map((launch) =>
              launch.year == currentLaunch.year
                ? {
                    ...launch,
                    amountLaunches: Number(launch.amountLaunches) + 1,
                  }
                : launch
            );
          } else {
            accLaunches.push({
              amountLaunches: 1,
              launch_id: currentLaunch.id,
              year: currentLaunch.year,
              id: currentRocket.id,
              name: currentRocket.name,
              color: currentRocket.color,
            });
          }

          return accLaunches;
        },
        [] as Array<ILaunch>
      );

      rocketForYearLuanched.forEach((launchReduced) => {
        if (
          Object.keys(accLaunchesForYear).includes(String(launchReduced.year))
        )
          // @ts-ignore
          accLaunchesForYear[`${launchReduced.year}`].push(launchReduced);
        else {
          // @ts-ignore
          accLaunchesForYear[`${launchReduced.year}`] = [launchReduced];
        }
      });

      return accLaunchesForYear;
    }, {});

    return res.json({
      metadata,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Sorry, there was an error generating the rocket bar stats",
    });
  }
};