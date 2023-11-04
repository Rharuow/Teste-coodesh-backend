module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: true,
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  clearMocks: true,
  coverageDirectory: "coverage",
};
