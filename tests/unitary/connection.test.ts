import mongoose from "mongoose";
import { connection } from "../../src/db/conn";
import { environmentMemory } from "../../src/utils/memoryCache";

beforeAll(() => {
  environmentMemory.storePermanentItem(
    "MONGODB_CONNECTION_TEST",
    String(process.env.MONGODB_CONNECTION_TEST)
  );
});

afterAll(async () => {
  process.env.MONGODB_CONNECTION_TEST = environmentMemory.retrieveItemValue(
    "MONGODB_CONNECTION_TEST"
  );
  environmentMemory.destroy();
  await mongoose.connection.close();
});

describe("When the connection with mongodb is established", () => {
  test("should connect when the connection is established", async () => {
    const readyState = (await connection()).connection.readyState;
    return expect(readyState).toBe(1);
  });

  test("should throw when the env variable is not set", async () => {
    process.env.MONGODB_CONNECTION_TEST = "";
    try {
      await connection();
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "error to connect mongoose : Can't call `openUri()` on an active connection with different connection strings. Make sure you aren't calling `mongoose.connect()` multiple times. See: https://mongoosejs.com/docs/connections.html#multiple_connections"
      );
    }
  });
});
