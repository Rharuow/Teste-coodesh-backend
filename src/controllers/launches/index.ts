import "module-alias/register";
import { Request, Response } from "express";
import { Query } from "../../repositories/launch/utils/createFilter";
import {
  getAmountLaunchesInDB,
  listFiltredLaunches,
} from "../../repositories/launch";

const index = async (req: Request, res: Response) => {
  // Permitted query parameters
  const { search, limit = 10, page = 1, results } = req.query as Query;

  try {
    // List filtered launches
    const launches = await listFiltredLaunches(req.query);

    // amount of filtered launches
    const launchesCount = await getAmountLaunchesInDB({ search, results });

    // Calculate total number of pages
    const totalPages = Math.ceil(launchesCount / limit);

    return res.json({
      results: launches,
      totalDocs: launchesCount,
      totalPages,
      page: page,
      hasNext: totalPages > page,
      hasPrev: page > 1,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Sorry, there was an error listing the releases" });
  }
};

export { index as launchesList };
