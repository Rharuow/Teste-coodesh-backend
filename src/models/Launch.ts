import { model, Schema } from "mongoose";

const launchesSchema = new Schema({
  links: {
    patch: {
      small: String,
      large: String,
    },
    reddit: {
      campaign: String,
      launch: String,
      media: String,
      recovery: String,
    },
    flickr: {
      small: [String],
      original: [String],
    },
    presskit: String,
    webcast: String,
    youtube_id: String,
    article: String,
    wikipedia: String,
  },
  static_fire_date_utc: String,
  static_fire_date_unix: Number,
  tdb: Boolean,
  net: Boolean,
  window: Number,
  rocket: { name: String, id: String },
  success: Boolean,
  failures: [],
  details: String,
  crew: [{ crew: String, role: String }],
  ships: [String],
  capsules: [String],
  payloads: [String],
  launchpad: String,
  auto_update: Boolean,
  flight_Number: Number,
  name: String,
  date_utc: String,
  date_unix: Number,
  date_local: String,
  date_precision: String,
  upcoming: Boolean,
  cores: [
    {
      core: String,
      flight: Number,
      gridfins: Boolean,
      legs: Boolean,
      reused: Boolean,
      landing_attempt: Boolean,
      landing_success: Boolean,
      landing_type: String,
      landpad: String,
    },
  ],
  id: String,
});

type LaunchSchema = {
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string;
      launch: string;
      media: string;
      recovery: string;
    };
    flickr: {
      small: Array<string>;
      original: Array<string>;
    };
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: { name: string; id: string };
  success: boolean;
  failures: Array<unknown>;
  details: string;
  crew: Array<{ crew: string; role: string }>;
  ships: Array<string>;
  capsules: Array<string>;
  payloads: Array<string>;
  launchpad: string;
  auto_update: boolean;
  flight_Number: number;
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
  id: string;
};

const LaunchModel = model("Launches", launchesSchema);

export { LaunchModel, launchesSchema, LaunchSchema };
