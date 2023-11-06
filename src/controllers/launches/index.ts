import { Request, Response } from "express";

import { createFilter } from "./utils/createFilter";
import { LaunchModel } from "../../models/Launch";
import { validationResult } from "express-validator";

export interface Query {
  search?: string;
  results?: "success" | "fail";
  limit?: number;
  page?: number;
}

const index = async (req: Request, res: Response) => {
  const { search, limit = 10, page = 1, results } = req.query as Query;

  // If errors return 422, client didn't provide required values
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const launches = await LaunchModel.find(createFilter(search, results))
      .sort({ id: "desc" })
      .limit(limit)
      .skip((page - 1) * limit);

    const launchesCount = await LaunchModel.find(
      createFilter(search, results)
    ).countDocuments();

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
    return res
      .status(400)
      .json({ message: "Sorry, there was an error listing the releases" });
  }
};

export { index as launchesList };
