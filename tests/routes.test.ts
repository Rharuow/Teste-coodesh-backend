import request from "supertest";
import mongoose from "mongoose";

import { app } from "../src/app";
import { lastLaunchesInMemory } from "../src/utils/memoryCache";

afterAll(async () => {
  lastLaunchesInMemory.destroy();
  // await mongoose.connection.close();
  // await new Promise<void>((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("Test route home", () => {
  test("It should response 200 when call the '/' route", (done) => {
    request(app)
      .get("/")
      .expect((response) => response.statusCode === 200)
      .end(done());
  });

  test("It should response 422 when send any query parameters", (done) => {
    request(app)
      .get("/?anyParameters=anyValue")
      .expect((response) => response.statusCode === 422)
      .end(done());
  });
});

describe("Test route to list launches", () => {
  test("It should response 200 when call the launches router without query params", (done) => {
    request(app)
      .get("/launches")
      .expect((response) => response.statusCode === 200)
      .end(done());
  });

  test("It should response 422 if the limit params not is numeric", (done) => {
    request(app)
      .get("/launches?limit=isNotNumeric")
      .expect((response) => response.status === 422)
      .end(done());
  });

  test("It should response 422 if the page params not is numeric", (done) => {
    request(app)
      .get("/launches?page=isNotNumeric")
      .expect((response) => response.status === 422)
      .end(done());
  });

  test("It should response 422 if the results params not is conteined in valid options", (done) => {
    request(app)
      .get("/launches?results=isNotConteinedInValidOptions")
      .expect((response) => response.status === 422)
      .end(done());
  });

  test("It should response 422 if the send invalid params in query params", (done) => {
    request(app)
      .get("/launches?invalidParam=true")
      .expect((response) => response.status === 422)
      .end(done());
  });
});

describe("Test route to stats", () => {
  test("It should response 200 when request done about stats pie", (done) => {
    request(app)
      .get("/stats/pie")
      .expect((response) => response.status === 200)
      .end(done());
  });

  test("It should response 422 if send any query params", (done) => {
    request(app)
      .get("/stats/pie?anyParams=true")
      .expect((response) => response.status === 422)
      .end(done());
  });

  test("It should response 200 when request done about stats bar", (done) => {
    request(app)
      .get("/stats/bar")
      .expect((response) => response.status === 200)
      .end(done());
  });

  test("It should response 422 if send any query params", (done) => {
    request(app)
      .get("/stats/bar?anyParams=true")
      .expect((response) => response.status === 422)
      .end(done());
  });
});
