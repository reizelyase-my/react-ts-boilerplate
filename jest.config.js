module.exports = {
  preset: 'ts-jest',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    ".+\\.(css|styl|sass|scss)$": "identity-obj-proxy",
    "^@actions(.*)$": "<rootDir>/src/actions$1",
    "^@reducers(.*)$": "<rootDir>/src/reducers$1"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
    "\\.(scss)$"
  ], 
  coverageThreshold: {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": -10
    }
  }
};