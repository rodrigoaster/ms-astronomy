import { type Config } from "jest";

const config: Config = {
  collectCoverageFrom: ["<rootDir>/src/*/.ts", "!<rootDir>/main/**"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};

export default config;
