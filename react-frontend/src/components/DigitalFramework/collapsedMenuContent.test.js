import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AppConfig } from '../../providers/AppConfig';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import CollapsedMenuContent from './collapsedMenuContent';

afterEach(cleanup);

it('It does not crash when when no props passed in.', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppConfig>
      <ApolloProvider
        client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
      >
        <CollapsedMenuContent />
      </ApolloProvider>
    </AppConfig>,
    div
  );
});

it('Renders without crashing when a project passed in.', () => {
  const project = {
    Achievements: 'blah',
    Description: 'blah ',
    FuturePlans: 'blah',
    Milestones: 'blah',
    MoreInformation: 'blah',
    Name: 'Keycloak',
    ProblemStatement: 'blha',
    ReportingPeriod: 'June 2021',
    ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
  };
  const div = document.createElement('div');
  const { container } = render(
    <AppConfig>
      <ApolloProvider
        client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
      >
        <CollapsedMenuContent content={project} />
      </ApolloProvider>
    </AppConfig>,
    div
  );
});
