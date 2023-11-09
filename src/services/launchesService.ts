import { Query } from "../repositories/launch/utils/createFilter";
import { LaunchSchema } from "../models/Launch";
import { listLaunchesSerializer } from "../serializer/launchesSerializer";

export const launchesService = ({
  launches,
  params,
  launchesCount,
}: {
  launches: Array<LaunchSchema>;
  params: Query;
  launchesCount: number;
}) => {
  const totalPages = Math.ceil(launchesCount / params.limit);

  return listLaunchesSerializer({
    launches,
    launchesCount,
    totalPages,
    page: params.page,
  });
};
