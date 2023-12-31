const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironmentOptions: {
    url: "http://localhost:3004",
  },

  moduleNameMapper: {
    "^@widgets(.*)$": "<rootDir>/src/widgets$1",
    "^@shared(.*)$": "<rootDir>/src/shared$1",
    "^@entities(.*)$": "<rootDir>/src/entities$1",
    "^@application(.*)$": "<rootDir>/src/application$1",
    "^@featured(.*)$": "<rootDir>/src/featured$1",
    "^@app(.*)$": "<rootDir>/src/app$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.ts"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
