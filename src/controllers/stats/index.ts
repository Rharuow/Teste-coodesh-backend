import { Request, Response } from "express";

import { getAmountLaunchesInDB, listLaunches } from "../../repositories/launch";
import { listRockets } from "../../repositories/rocket/list";
import { pieService } from "../../services/stats/pieService";
import { barService } from "../../services/stats/barService";

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

export const barStats = async (req: Request, res: Response) => {
  try {
    const rockets = await listRockets();

    const launches = await listLaunches();

    // service layer handle the rockets and totalLaunches
    return res.json(barService({ launches, rockets }));
  } catch (error) {
    console.log("error = ", error.message);
    return res.status(400).json({
      message: "Sorry, there was an error generating the rocket bar stats",
    });
  }
};
