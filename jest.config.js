module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src/__tests__"],
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    moduleNameMapper: {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      // Handle CSS imports (without CSS modules)
      "^.+\\.(css|sass|scss)$": "<rootDir>/src/__tests__/mocks/styleMock.js",
  
      // Handle image imports
      "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
        "<rootDir>/src/__tests__/mocks/fileMock.js",
      // resolve path
      "^~/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.ts"],
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: [
      "<rootDir>/.next/",
      "<rootDir>/node_modules/",
      "<rootDir>/src/__tests__/setupTests.ts",
      "<rootDir>/src/__tests__/tsconfig.jest.json",
      "<rootDir>/src/__tests__/mocks/",
    ],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"],
};