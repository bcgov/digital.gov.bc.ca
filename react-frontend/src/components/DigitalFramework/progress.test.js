import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppConfig } from '../../providers/AppConfig';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Progress from './progress';
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

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppConfig>
      <MockedProvider>
        <Progress />
      </MockedProvider>
    </AppConfig>,
    div
  );
});
