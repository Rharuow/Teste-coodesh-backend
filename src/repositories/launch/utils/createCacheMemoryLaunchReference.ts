import { Query } from "./createFilter";

export const createCacheMemoryLaunchReference = (params?: Query) => {
  let referenceString = "launches";

  if (!params) return referenceString;

  if (params.limit)
    referenceString = referenceString.concat("-", `limit=${params.limit}`);
  if (params.page)
    referenceString = referenceString.concat("-", `page=${params.page}`);
  if (params.results)
    referenceString = referenceString.concat("-", `results=${params.results}`);
  if (params.search)
    referenceString = referenceString.concat("-", `search=${params.search}`);

  return referenceString;
};
