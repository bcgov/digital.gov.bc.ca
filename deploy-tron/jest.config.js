module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/__tests__/', '<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/helpers.ts'],
  testRegex: '(<rootDir>/__tests__/.*|\\.(test|spec))\\.[tj]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'index.json': '<rootDir>/__fixtures__/config.json',
  },
};
