/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ["<rootDir>"],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/build",
  ],
  preset: "ts-jest",
};
