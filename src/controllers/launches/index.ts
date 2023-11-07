import "module-alias/register";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Query } from "../../repositories/launch/utils/createFilter";
import {
  getAmountLaunchesInDB,
  listFiltredLaunches,
} from "../../repositories/launch";

const index = async (req: Request, res: Response) => {
  const { search, limit = 10, page = 1, results } = req.query as Query;

  // If errors return 422, client didn't provide required values
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const launches = await listFiltredLaunches(req.query);

    const launchesCount = await getAmountLaunchesInDB({ search, results });

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
