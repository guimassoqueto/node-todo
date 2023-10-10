
export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/tests/helpers/*.ts"
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@tests/(.*)": "<rootDir>/tests/$1"
  },
  preset: "ts-jest",
  roots: [
    "<rootDir>/tests"
  ],
  testEnvironment: "jest-environment-node",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};