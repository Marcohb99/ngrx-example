const config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  clearMocks: true,
  collectCoverage: false,
  coverageReporters: ['lcov', 'clover', 'text', 'cobertura'],
  testPathIgnorePatterns: [
    '<rootDir>/e2e/',
    '<rootDir>/tests-examples/'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/projects/api/',
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/'
  ],
  coverageDirectory: '<rootDir>/coverage',
  // coverageThreshold: {
  //     global: {
  //       branches: 80,
  //       functions: 80,
  //       lines: 80,
  //       statements: -10,
  //     },
  // },
  // transform: {
  //   '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
  // },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
    '@i18n/(.*)': '<rootDir>/src/assets/i18n/$1',
    '@api-store': '<rootDir>/projects/api-store/src/public-api.ts',
    '@api': '<rootDir>/projects/api/src/public-api.ts',
    '@store': '<rootDir>/projects/store/src/public-api.ts',
    '@submission': '<rootDir>/projects/submission/src/public-api.ts',
    '@result': '<rootDir>/projects/result/src/public-api.ts',
    '@builder': '<rootDir>/projects/builder/src/public-api.ts',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

process.env.TZ = 'UTC';
module.exports = config;
