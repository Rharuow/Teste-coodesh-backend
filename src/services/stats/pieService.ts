import { pieSerializer } from "../../serializer/stats/pie";
import { RocketsSchema } from "../../models/Rocket";

export const pieService = ({
  rockets,
  totalLaunches,
}: {
  rockets: Array<RocketsSchema>;
  totalLaunches: number;
}) => {
  const success = rockets
    .map((rocket) => rocket.launches.filter((launch) => launch.success).length)
    .reduce((acc, current) => acc + current, 0);

  const fails = totalLaunches - success;

  return pieSerializer({ fails, success, rockets });
};
