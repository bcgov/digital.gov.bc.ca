import React from 'react';
import { createMemoryHistory } from 'history';

import { Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AppConfig } from '../../providers/AppConfig';
import { MockedProvider } from '@apollo/react-testing';

// https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55

//Whenever a page uses the useParams, the tested component needs to have them mocked
// renderWithRouterMatch(BlogNavigation, {
//   route: '/project/ABC123',
//   path: '/project/:id',
// });

// renderWithRouterMatch(CoCoPage, {
//   route: '/common-components/keycloak',
//   path: '/common-components/:uid',
// }, mocks);

export function renderWithRouterMatch(
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  mocks
) {
  return {
    ...render(
      <AppConfig>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <Route path={path} component={ui} />
          </Router>
        </MockedProvider>
      </AppConfig>
    ),
  };
}
