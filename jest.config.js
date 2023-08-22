module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts)?$': 'ts-jest',
  },
  // Only files with `spec` or `test` in thei names will be considered as test suites
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/', '/*.data.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/', '/*.data.ts'],
};
