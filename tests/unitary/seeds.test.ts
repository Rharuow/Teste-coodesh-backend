import { connection } from "../../src/db/conn";
import { LaunchModel } from "../../src/models/Launch";
import { seed } from "./../../src/utils/seed";

beforeAll(async () => {
  await connection();
}, 10000);

describe("Seeds files run when starting app and feed the mongodb with rockets and launches", () => {
  test("should fetch data from spaceX API and return rocket and launches", async () => {
    const launchesMongo = await LaunchModel.count();
    const result = await seed();
    return expect(
      (launchesMongo > 0 && result === "launches are loaded") ||
        (launchesMongo === 0 && result === "launches pushed")
    ).toBeTruthy();
  });
});
