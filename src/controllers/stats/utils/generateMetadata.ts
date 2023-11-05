import dayjs from "dayjs";
import { Metadata } from "..";
import { LaunchSchema } from "../../../models/Launch";
import { RocketsSchema } from "../../../models/Rocket";

export const generateMetadata = (
  launches: Array<LaunchSchema>,
  rockets: Array<RocketsSchema>
) => {
  const metadata: Metadata = {};

  launches.forEach((launch) => {
    const year = String(dayjs(launch.date_utc).toDate().getFullYear());

    const hasYearKeyAtMetadata = Object.keys(metadata).includes(year);

    const hasRocketLaunthAtMetadataYear =
      hasYearKeyAtMetadata &&
      metadata[year].some(
        (launchForYear) => launchForYear.id === launch.rocket.id
      );

    // if there's not year key at the metadata object then add it and add the launch
    if (!hasYearKeyAtMetadata)
      metadata[year] = [
        {
          amountLaunches: 1,
          name: launch.rocket.name,
          color: rockets.find((rocket) => rocket.id === launch.rocket.id).color,
          id: launch.rocket.id,
          year,
        },
      ];
    // if there's already a year key at the metadata object then add the launch to that year
    else {
      // if there's already a rocket launch year key then add 1 to amountLaunhes in the rocket launch in metadata object
      if (hasRocketLaunthAtMetadataYear)
        metadata[year] = metadata[year].map((launchForYear) =>
          launchForYear.id === launch.rocket.id
            ? {
                ...launchForYear,
                amountLaunches: launchForYear.amountLaunches + 1,
              }
            : launchForYear
        );
      // if there's not a rocket launch for this year then add it to the list of launches for this year.
      else
        metadata[year].push({
          amountLaunches: 1,
          name: launch.rocket.name,
          color: rockets.find((rocket) => rocket.id === launch.rocket.id).color,
          id: launch.rocket.id,
          year,
        });
    }
  });

  return metadata;
};
