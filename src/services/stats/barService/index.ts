import { LaunchSchema } from "../../../models/Launch";
import { generateMetadata } from "./utils/generateMetadata";
import { RocketsSchema } from "../../../models/Rocket";
import { barSerializer } from "../../../serializer/stats/barSerializer";

interface ILaunch {
  amountLaunches?: number;
  year?: string;
  id?: string;
  name?: string;
  color?: string;
}

export type Metadata = {
  [key: string]: Array<ILaunch>;
};

export const barService = ({
  launches,
  rockets,
}: {
  launches: Array<LaunchSchema>;
  rockets: Array<RocketsSchema>;
}) => {
  const metadata: Metadata = generateMetadata(
    launches as Array<LaunchSchema>,
    rockets as Array<RocketsSchema>
  );

  return barSerializer({ metadata, rockets });
};
