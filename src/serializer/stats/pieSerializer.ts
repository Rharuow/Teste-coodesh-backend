import { RocketsSchema } from "../../models/Rocket";

export const pieSerializer = ({
  fails,
  rockets,
  success,
}: {
  rockets: Array<RocketsSchema>;
  success: number;
  fails: number;
}) => ({
  rockets,
  metadata: { success, fails, rocketsTotal: rockets.length },
});
