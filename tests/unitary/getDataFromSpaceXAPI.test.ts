import { connection } from "../../src/db/conn";
import { getDataFromSpaceX } from "../../src/utils/getDataFromSpaceXAPI";
import { lastLaunches } from "../../src/utils/memoryCache";

afterAll(async () => {
  lastLaunches.destroy();
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

beforeAll(async () => {
  await connection();
});

afterAll((done) => done());

describe("Run the get data from space x file to update the mongoDB", () => {
  test("should run the get data from the space x file to update the mongoDB or send message showing that the mongoDB is updated", (done) => {
    getDataFromSpaceX().then((result) => {
      expect(
        result === "data pushed from spacex api" ||
          result === "data already updated"
      ).toBeTruthy();
      done();
    });
  });
});
