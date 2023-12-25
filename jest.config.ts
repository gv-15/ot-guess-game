import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: [],
  maxWorkers: 2,
  workerIdleMemoryLimit: '2GB',
  forceExit: true,
  clearMocks: true,
  logHeapUsage: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 50,
      lines: 90,
    },
  },
  coverageReporters: [
    'html',
    ['text', { file: '../coverage.txt', maxCols: 120 }],
    'text',
    'text-summary',
  ],
  testEnvironment: './FixJSDOMEnvironment.ts',
};
export default config;
