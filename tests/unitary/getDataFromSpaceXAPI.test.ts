import mongoose from "mongoose";
import { connection } from "../../src/db/conn";
import { getDataFromSpaceX } from "../../src/utils/getDataFromSpaceXAPI";
import {
  amountLaunchesInMemory,
  lastLaunchesInMemory,
  launchesInMemory,
  rocketsInMemory,
} from "../../src/utils/memoryCache";

afterAll(async () => {
  lastLaunchesInMemory.clear();
  amountLaunchesInMemory.clear();
  launchesInMemory.clear();
  rocketsInMemory.clear();
  await mongoose.connection.close();
});

beforeAll(async () => {
  await connection();
});

describe("Run the get data from space x file to update the mongoDB", () => {
  test("should run the get data from the space x file to update the mongoDB or send message showing that the mongoDB is updated", async () => {
    const result = await getDataFromSpaceX();
    expect(
      result === "data pushed from spacex api" ||
        result === "data already updated"
    ).toBeTruthy();
    return result;
  });
});
