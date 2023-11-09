import mongoose from "mongoose";

import { connection } from "../../src/db/conn";
import { seed } from "../../src/utils/seed";
import {
  amountLaunchesInMemory,
  lastLaunchesInMemory,
  launchesInMemory,
  rocketsInMemory,
} from "../../src/utils/memoryCache";

beforeAll(async () => {
  await connection();
  await mongoose.connection.db.dropCollection("launches");
  await mongoose.connection.db.dropCollection("rockets");
  lastLaunchesInMemory.clear();
  amountLaunchesInMemory.clear();
  launchesInMemory.clear();
  rocketsInMemory.clear();
}, 10000);

afterAll(async () => {
  await mongoose.connection.close();
  lastLaunchesInMemory.clear();
  amountLaunchesInMemory.clear();
  launchesInMemory.clear();
  rocketsInMemory.clear();
});

describe("Seeds files run when starting app and feed the mongodb with rockets and launches", () => {
  test("should return message 'launches pushed' when the seed method are called and if there aren't launch at the database", async () => {
    expect(launchesInMemory.hasItem("launchesBySpaceXAPI")).toBeFalsy();
    expect(rocketsInMemory.hasItem("rocketsBySpaceXAPI")).toBeFalsy();
    expect(amountLaunchesInMemory.hasItem("totalLaunchesInDB")).toBeFalsy();

    const result = await seed();

    expect(result).toBe("launches pushed");

    expect(launchesInMemory.hasItem("launchesBySpaceXAPI")).toBeTruthy();
    expect(rocketsInMemory.hasItem("rocketsBySpaceXAPI")).toBeTruthy();
    return expect(
      amountLaunchesInMemory.hasItem("totalLaunchesInDB")
    ).toBeTruthy();
  });

  test("should return message 'launches are loaded' when the seed method are called and if there're at the least one launch at database", () => {
    return expect(seed()).resolves.toBe("launches are loaded");
  });
});
