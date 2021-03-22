import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Communities from './communities';
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
        <Communities />
      </ApolloProvider>
    </AppConfig>,
    div
  );
});
