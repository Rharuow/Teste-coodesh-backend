import { Request, Response } from "express";

import { LaunchSchema } from "../../models/Launch";
import { RocketsSchema } from "../../models/Rocket";
import { generateMetadata } from "./utils/generateMetadata";
import {
  getAmountLaunchesInDB,
  listFiltredLaunches,
} from "../../repositories/launch";
import { listRockets } from "../../repositories/rocket/list";
import { pieService } from "../../services/stats/pieService";

export const pieStats = async (_: Request, res: Response) => {
  try {
    const rockets = await listRockets();

    const totalLaunches = await getAmountLaunchesInDB();

    // service layer handle the rockets and totalLaunches
    return res.json(pieService({ rockets, totalLaunches }));
  } catch (error) {
    return res.status(400).json({
      message:
        "Sorry, there was an error generating the rocket pizza statistics",
    });
  }
};

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

export const barStats = async (req: Request, res: Response) => {
  try {
    const rockets = await listRockets();

    const launches = await listFiltredLaunches();

    const metadata: Metadata = generateMetadata(
      launches as Array<LaunchSchema>,
      rockets as Array<RocketsSchema>
    );

    return res.json({
      rockets: rockets.sort((accRocket, currentRocket) =>
        accRocket.launches.length > currentRocket.launches.length
          ? -1
          : accRocket.launches.length < currentRocket.launches.length
          ? 1
          : 0
      ),
      metadata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Sorry, there was an error generating the rocket bar stats",
    });
  }
};
