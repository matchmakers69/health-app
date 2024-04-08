import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config: Config = {
	// Add more setup options before each test is run
	moduleDirectories: ["node_modules", "<rootDir>/"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	preset: "ts-jest",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
