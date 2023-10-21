import { LaunchModel } from "../models/Launch.mjs";
import { RocketModel } from "../models/Rocket.mjs";

export const pizzaStats = async (req, res) => {
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

export const barStats = async (req, res) => {
  try {
    const rockets = await RocketModel.find();

    const metadata = rockets.reduce((accLaunchesForYear, currentRocket) => {
      const rocketForYearLuanched = currentRocket.launches.reduce(
        (accLaunches, currentLaunch) => {
          if (accLaunches.some((launch) => launch.year == currentLaunch.year)) {
            accLaunches = accLaunches.map((launch) =>
              launch.year == currentLaunch.year
                ? { ...launch, amountLaunches: launch.amountLaunches + 1 }
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
        []
      );

      rocketForYearLuanched.forEach((launchReduced) => {
        if (Object.keys(accLaunchesForYear).includes(launchReduced.year))
          accLaunchesForYear[`${launchReduced.year}`].push(launchReduced);
        else {
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
