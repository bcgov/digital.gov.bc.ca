import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Community from './community';
import { AppConfig } from '../../providers/AppConfig';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Using useParams makes testing difficult.  This fixes it.
// https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55

// Helper function
export function renderWithRouterMatch(
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <AppConfig>
        <ApolloProvider
          client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
        >
          <Router history={history}>
            <Route path={path} component={ui} />
          </Router>
        </ApolloProvider>
      </AppConfig>
    ),
  };
}

afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  renderWithRouterMatch(Community, {
    route: '/project/ABC123',
    path: '/project/:id',
  });
});
