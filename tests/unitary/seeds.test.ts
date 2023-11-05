import mongoose from "mongoose";

import { connection } from "../../src/db/conn";
import { LaunchModel, LaunchSchema } from "../../src/models/Launch";
import { seed } from "./../../src/utils/seed";

const mockeLaunch: LaunchSchema = {
  links: {
    patch: {
      small: "null",
      large: "null",
    },
    reddit: {
      campaign: "null",
      launch: "null",
      media: "null",
      recovery: "null",
    },
    flickr: {
      small: ["null"],
      original: ["null"],
    },
    presskit: "null",
    webcast: "null",
    youtube_id: "null",
    article: "null",
    wikipedia: "null",
  },
  rocket: {
    name: "Falcon 9",
    id: "5e9d0d95eda69973a809d1ec",
  },
  static_fire_date_utc: "null",
  static_fire_date_unix: 0,
  net: false,
  window: 0,
  success: false,
  failures: ["null"],
  details: "null",
  crew: [{ crew: "", role: "" }],
  ships: ["null"],
  capsules: ["null"],
  payloads: ["null"],
  launchpad: "5e9e4501f509094ba4566f84",
  auto_update: true,
  name: "ispace Mission 1 & Rashid",
  date_utc: "2022-11-22T00:00:00.000Z",
  date_unix: 1669075200,
  date_local: "2022-11-21T19:00:00-05:00",
  date_precision: "day",
  upcoming: true,
  cores: [
    {
      core: "null",
      flight: 0,
      gridfins: true,
      legs: true,
      reused: false,
      landing_attempt: false,
      landing_success: false,
      landing_type: "null",
      landpad: "null",
    },
  ],
  id: "633f723d0531f07b4fdf59c4",
  tdb: false,
  flight_Number: 0,
};

beforeAll(async () => {
  await connection();
}, 10000);

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Seeds files run when starting app and feed the mongodb with rockets and launches", () => {
  test("should return message 'launches are loaded' when the seed method are called and if there're at the least one launch at database", async () => {
    await LaunchModel.create(mockeLaunch);

    return expect(seed()).resolves.toBe("launches are loaded");
  });

  test("should return message 'launches pushed' when the seed method are called and if there aren't launch at the database", async () => {
    try {
      await mongoose.connection.db.dropCollection("launches");
      await mongoose.connection.db.dropCollection("rockets");

      return expect(seed()).resolves.toBe("launches pushed");
    } catch (error) {
      console.log(error);
    }
  }, 12000);

  test("should throw error when the mongoose is disconnected", async () => {
    await mongoose.connection.close();
    return expect(seed()).rejects.toHaveProperty(
      "message",
      "Client must be connected before running operations"
    );
  });
});
