import { Request, Response } from "express";

import { createFilter } from "./utils/createFilter";
import { LaunchModel } from "../../models/Launch";

export interface Query {
  search?: string;
  results?: "success" | "fail";
  limit?: number;
  page?: number;
}

const index = async (req: Request, res: Response) => {
  const { search, limit = 10, page = 1, results } = req.query as Query;

  try {
    const launches = await LaunchModel.find(createFilter(search, results))
      .limit(limit)
      .skip((page - 1) * limit);

    const launchesCount = await LaunchModel.find(
      createFilter(search, results)
    ).count();

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
