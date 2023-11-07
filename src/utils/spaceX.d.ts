export type SpaceXLaunches = {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: Array<string>;
  } | null;
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign?: string;
      launch: string;
      media?: string;
      recovery?: string;
    };
    flickr: {
      small: Array<string>;
      original: Array<string>;
    };
    presskit?: string;
    webcast: string;
    youtube_id: string;
    article?: string;
    wikipedia: string;
  };
  static_fire_date_utc?: string;
  static_fire_date_unix?: string;
  net: boolean;
  window?: string;
  rocket: string;
  success: boolean;
  failures: Array<string>;
  details?: string;
  crew: Array<{
    crew: string;
    role: string;
  }>;
  ships: Array<string>;
  capsules: Array<string>;
  payloads: Array<string>;
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Array<{
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type: string;
    landpad: string;
  }>;
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
};
