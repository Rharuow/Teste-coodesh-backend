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
  rocket: String,
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

const LaunchModel = model("Launches", launchesSchema);

export { LaunchModel, launchesSchema };
