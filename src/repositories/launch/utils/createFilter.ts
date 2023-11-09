export interface Query {
  search?: string;
  results?: "success" | "fail";
  limit?: number;
  page?: number;
}

export const createFilter = (search?: string, results?: Query["results"]) => {
  const nameRegex = { name: { $regex: ".*" + search + ".*" } };
  const rocketNameRegex = { "rocket.name": { $regex: ".*" + search + ".*" } };
  const successFilter =
    results === "success"
      ? { success: true }
      : { $or: [{ success: false }, { success: null }] };

  if (search && results !== undefined) {
    return {
      $and: [successFilter, { $or: [nameRegex, rocketNameRegex] }],
    };
  }
  if (search && results === undefined)
    return { $or: [nameRegex, rocketNameRegex] };
  if (!search && results !== undefined) return successFilter;
  return {};
};
