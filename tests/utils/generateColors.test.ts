import { generateRandomColor } from "../../src/utils/generateColor";

describe("Test to generateRandomColor", () => {
  test("should generate random if parameter is rgb pattern is correct", () => {
    expect(generateRandomColor("rgb(255, 255, 255)")).toContain("rgb(");
  });

  test("should throw Error if the parameter is a wrong rgb pattern", () => {
    try {
      generateRandomColor("255, 255, 255");
    } catch (error) {
      expect(error).toHaveProperty(
        "message",
        "The color string does not contain 'rgb('"
      );
    }
  });

  test("should throw Error if the parameter is missing rgb color component", () => {
    try {
      generateRandomColor("rgb(255, 255)");
    } catch (error) {
      expect(error).toHaveProperty("message", "Missing RGB components");
    }
  });
});
