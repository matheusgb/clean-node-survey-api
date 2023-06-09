export default {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  coverageProvider: "v8",
};
