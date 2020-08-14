module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    'jest': true,
  },
  extends: [ 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [ 'jest', 'prettier', '@typescript-eslint'],
  rules: {},
};
