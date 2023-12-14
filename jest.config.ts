import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  verbose: true,
  rootDir: '.',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  testMatch: ['**/test/*.(spec|test).(j|t)s?(x)'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  moduleNameMapper: {
    '^@app/lib(|/.*)$': '<rootDir>/src/lib/$1',
  },
};

export default config;
