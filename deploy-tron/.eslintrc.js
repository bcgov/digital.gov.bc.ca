module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    'jest': true,
  },
  extends: [ 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [ 'jest', 'prettier'],
  rules: {},
};
