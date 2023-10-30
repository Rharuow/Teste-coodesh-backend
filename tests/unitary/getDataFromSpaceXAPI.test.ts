import { connection } from "../../src/db/conn";
import { getDataFromSpaceX } from "../../src/utils/getDataFromSpaceXAPI";
import { lastLaunches } from "../../src/utils/memoryCache";

afterAll(() => {
  lastLaunches.destroy();
});

beforeAll(async () => {
  await connection();
});

afterAll((done) => done());

describe("Run the get data from space x file to update the mongoDB", () => {
  test("should run the get data from the space x file to update the mongoDB or send message showing that the mongoDB is updated", async () => {
    const response = await getDataFromSpaceX();
    expect(
      response === "data pushed from spacex api" ||
        response === "data already updated"
    ).toBeTruthy();
  }, 10000);
});
