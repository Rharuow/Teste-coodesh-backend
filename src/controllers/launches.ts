import { Request, Response } from "express";
import { LaunchModel } from "../models/Launch";

interface Query {
  search?: string;
  limit?: number;
  page?: number;
}

const index = async (req: Request, res: Response) => {
  const { search, limit = 10, page = 1 } = req.query as Query;

  try {
    const launches = await LaunchModel.find(
      search ? { name: { $regex: ".*" + search + ".*" } } : {}
    )
      .limit(limit)
      .skip((page - 1) * limit);

    const launchesCount = launches.length;

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
