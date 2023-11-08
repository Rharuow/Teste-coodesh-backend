import mongoose from "mongoose";
import { connection } from "../../src/db/conn";
import { getDataFromSpaceX } from "../../src/utils/getDataFromSpaceXAPI";
import { lastLaunchesInMemory } from "../../src/utils/memoryCache";

afterAll(async () => {
  lastLaunchesInMemory.destroy();
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
