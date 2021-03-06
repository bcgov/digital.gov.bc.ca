import React from 'react';
import ReactDOM from 'react-dom';
// import { render, cleanup } from '@testing-library/react';
import {
  render,
  fireEvent,
  getByTestId,
  cleanup,
} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import FeedbackForm from './feedback';
import { AppConfig } from '../../providers/AppConfig';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppConfig>
      <ApolloProvider
        client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
      >
        <FeedbackForm />
      </ApolloProvider>
    </AppConfig>,
    div
  );
});
