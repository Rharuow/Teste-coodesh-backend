import request from "supertest";

import { app } from "../src/app";

describe("Test route home", () => {
  test("It should response 200 when call the '/' route", async () => {
    const response = await request(app).get("/");
    return expect(response.statusCode).toBe(200);
  });
});

describe("Test route to list launches", () => {
  test("It should response 200 when call the launches router without query params", async () => {
    const response = await request(app).get("/launches");
    return expect(response.statusCode).toBe(200);
  });

  test("It should response 422 if the limit params not is numeric", async () => {
    const response = await request(app).get("/launches?limit=isNotNumeric");
    return expect(response.statusCode).toBe(422);
  });

  test("It should response 422 if the page params not is numeric", async () => {
    const response = await request(app).get("/launches?page=isNotNumeric");
    return expect(response.statusCode).toBe(422);
  });

  test("It should response 422 if the results params not is conteined in valid options", async () => {
    const response = await request(app).get(
      "/launches?results=isNotConteinedInValidOptions"
    );
    return expect(response.statusCode).toBe(422);
  });

  test("It should response 422 if the send invalid params in query params", async () => {
    const response = await request(app).get("/launches?invalidParam=true");
    return expect(response.statusCode).toBe(422);
  });
});

describe("Test route to stats", () => {
  test("It should response 200 when request done about stats pie", async () => {
    const response = await request(app).get("/stats/pie");
    return expect(response.statusCode).toBe(200);
  });

  test("It should response 200 when request done about stats bar", async () => {
    const response = await request(app).get("/stats/bar");
    return expect(response.statusCode).toBe(200);
  });
});
