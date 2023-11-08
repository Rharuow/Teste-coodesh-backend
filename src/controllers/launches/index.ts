import "module-alias/register";
import { Request, Response } from "express";
import { Query } from "../../repositories/launch/utils/createFilter";
import { getAmountLaunchesInDB, listLaunches } from "../../repositories/launch";
import { launchesService } from "../../services/launchesService";

const index = async (req: Request, res: Response) => {
  // Permitted query parameters
  const { search, limit = 10, page = 1, results } = req.query as Query;

  try {
    // List filtered launches
    const launches = await listLaunches(req.query);

    // amount of filtered launches
    const launchesCount = await getAmountLaunchesInDB({ search, results });

    // service layer list launches
    return res.json(
      launchesService({ launches, launchesCount, params: { limit, page } })
    );
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Sorry, there was an error listing the releases" });
  }
};

export { index as launchesList };
