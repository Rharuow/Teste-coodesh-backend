/* "results": [
  {.....},
  {.....},
  {.....},
  {.....},
],
"totalDocs": 20,
"page": 1,
"totalPages": 5, 
"hasNext": true,
"hasPrev": false
 */

import { LaunchModel } from "../models/Launch.mjs";

const index = async (req, res) => {
  const { search, limit = 10, page = 1 } = req.query;

  console.log("search = ", search);
  console.log("limit = ", limit);

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
      .json({ message: "Desculpe, houve um erro ao listar os lançamentos" });
  }
};

export { index as launchesList };
