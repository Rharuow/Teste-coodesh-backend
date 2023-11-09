import { LaunchSchema } from "../models/Launch";

export const listLaunchesSerializer = ({
  launches,
  launchesCount,
  page,
  totalPages,
}: {
  launches: Array<LaunchSchema>;
  launchesCount: number;
  totalPages: number;
  page: number;
}) => {
  return {
    results: launches,
    totalDocs: launchesCount,
    totalPages,
    page: page,
    hasNext: totalPages > page,
    hasPrev: page > 1,
  };
};
