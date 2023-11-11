import request from "supertest";

import { app } from "../../src/app";
import {
  amountLaunchesInMemory,
  lastLaunchesInMemory,
  launchesInMemory,
  rocketsInMemory,
} from "../../src/utils/memoryCache";
import mongoose from "mongoose";
import { LaunchSchema } from "../../src/models/Launch";

afterAll(async () => {
  await mongoose.connection.close();
  lastLaunchesInMemory.clear();
  amountLaunchesInMemory.clear();
  launchesInMemory.clear();
  rocketsInMemory.clear();
});

describe("Test route home", () => {
  test("It should response 200 when call the '/' route", (done) => {
    request(app).get("/").expect(200, done);
  });

  test("It should response 422 when send any query parameters", (done) => {
    request(app).get("/?anyParameters=anyValue").expect(422, done);
  });
});

describe("Test route to list launches", () => {
  test("It should response 200 when call the launches router without query params", (done) => {
    request(app).get("/launches").expect(200, done);
  });

  test("It should response 200 and return empty array when call the launches router with query params 'search' with value 'Heavy'", (done) => {
    request(app)
      .get("/launches?search=Heavy")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.results.length).toBe(0);
        done();
      });
  });

  test("It should response 200 and return array with length greater than 0 when call the launches router with query params 'search' with value 'Falcon'", (done) => {
    request(app)
      .get("/launches?search=Falcon")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.results.length).toBeGreaterThan(0);
        done();
      });
  });

  test("It should have two returns: the first being the array of launches on the first page, and the second being the array of launches on the second page, with both arrays being distinct.", async () => {
    const {
      body: { results: launchesFirstPage },
    } = await request(app).get("/launches?page=1&limit=3");
    const {
      body: { results: launchesSecondPage },
    } = await request(app).get("/launches?page=2&limit=3");

    return expect(
      launchesFirstPage.some((launchOfFirstPage: LaunchSchema) =>
        launchesSecondPage.some(
          (launchOfSecondPage: LaunchSchema) =>
            launchOfFirstPage.id === launchOfSecondPage.id
        )
      )
    ).toBeFalsy();
  });

  test("It should response 422 if the limit params not is numeric", (done) => {
    request(app).get("/launches?limit=isNotNumeric").expect(422, done);
  });

  test("It should response 422 if the page params not is numeric", (done) => {
    request(app).get("/launches?page=isNotNumeric").expect(422, done);
  });

  test("It should response 422 if the results params not is conteined in valid options", (done) => {
    request(app)
      .get("/launches?results=isNotConteinedInValidOptions")
      .expect(422, done);
  });

  test("It should response 422 if the send invalid params in query params", (done) => {
    request(app).get("/launches?invalidParam=true").expect(422, done);
  });
});

describe("Test route to stats", () => {
  test("It should response 200 when request done about stats bar", (done) => {
    request(app).get("/stats/bar").expect(200, done);
  });

  test("It should response 422 if send any query params", (done) => {
    request(app).get("/stats/bar?anyParams=true").expect(422, done);
  });

  test("It should response 200 when request done about stats pie", (done) => {
    request(app).get("/stats/pie").expect(200, done);
  });

  test("It should response 422 if send any query params", (done) => {
    request(app).get("/stats/pie?anyParams=true").expect(422, done);
  });
});
