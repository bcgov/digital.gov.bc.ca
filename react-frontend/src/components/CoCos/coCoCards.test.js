import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoCoCards from './coCoCards';
import { AppConfig } from '../../providers/AppConfig';
import { MockedProvider } from '@apollo/react-testing';

const originalError = console.error;

beforeAll(() => {
  console.error = (...args: any[]) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }

    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <CoCoCards />
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
