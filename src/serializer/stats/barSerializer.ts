import { Metadata } from "../../services/stats/barService";
import { RocketsSchema } from "../../models/Rocket";

export const barSerializer = ({
  metadata,
  rockets,
}: {
  rockets: Array<RocketsSchema>;
  metadata: Metadata;
}) => ({
  //Order the rockets by the number of launches in ascending order.
  rockets: rockets.sort((accRocket, currentRocket) =>
    accRocket.launches.length > currentRocket.launches.length
      ? -1
      : accRocket.launches.length < currentRocket.launches.length
      ? 1
      : 0
  ),
  metadata,
});
