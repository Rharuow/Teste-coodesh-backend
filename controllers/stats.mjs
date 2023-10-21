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
      message: "Desculpe, houve um erro ao gerar as estatíticas dos foguetes",
    });
  }
};
