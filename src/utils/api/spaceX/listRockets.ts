export const fetchRockets: () => Promise<
  Array<{
    id: string;
    name: string;
  }>
> = async () =>
  (await (
    await fetch("https://api.spacexdata.com/v4/rockets")
  ).json()) as Array<{ id: string; name: string }>;
