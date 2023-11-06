import request from "supertest";
import { app } from "../../src/app";
import { environmentMemory } from "../../src/utils/memoryCache";

beforeAll(() => {
  environmentMemory.storePermanentItem(
    "MONGODB_CONNECTION_TEST",
    String(process.env.MONGODB_CONNECTION_TEST)
  );
  // setting empty environment variable for testing
  process.env.MONGODB_CONNECTION_TEST = "";
});

afterAll(() => {
  process.env.MONGODB_CONNECTION_TEST = environmentMemory.retrieveItemValue(
    "MONGODB_CONNECTION_TEST"
  );
  environmentMemory.destroy();
});

describe("Testing connection middleware express", () => {
  test("Should not connect to mongodb and return response 500 with error message", (done) => {
    request(app)
      .get("/")
      .expect((response) => response.statusCode === 500)
      .end(done());
  });
});
