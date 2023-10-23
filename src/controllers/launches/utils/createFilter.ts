import { Query } from "..";

export const createFilter = (search?: string, results?: Query["results"]) => {
  if (search && results !== undefined)
    return {
      $and: [
        results === "success"
          ? { success: true }
          : { $or: [{ success: false }, { success: null }] },
        {
          $or: [
            { name: { $regex: ".*" + search + ".*" } },
            { "rocket.name": { $regex: ".*" + search + ".*" } },
          ],
        },
      ],
    };
  if (search && results === undefined)
    return {
      $or: [
        { name: { $regex: ".*" + search + ".*" } },
        { "rocket.name": { $regex: ".*" + search + ".*" } },
      ],
    };
  if (!search && results !== undefined)
    return results === "success"
      ? { success: true }
      : { $or: [{ success: false }, { success: null }] };
  return {};
};
