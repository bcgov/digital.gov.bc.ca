import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CollapsedMenus from './collapsedMenus';
import { AppConfig } from '../../../providers/AppConfig';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
afterEach(cleanup);

it('Renders no collapse panels if no props are passed in', () => {
  const div = document.createElement('div');
  const { container } = render(
    <AppConfig>
      <ApolloProvider
        client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
      >
        <CollapsedMenus />
      </ApolloProvider>
    </AppConfig>,
    div
  );
  expect(container.querySelectorAll('.PanelStyled').length).toEqual(0);
});

it('Renders 4 collapse panels if all props passed in', () => {
  const div = document.createElement('div');
  const { container } = render(
    <AppConfig>
      <ApolloProvider
        client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
      >
        <CollapsedMenus
          price="**Markdown sample**"
          service="**Markdown sample**"
          technicalInfo="**Markdown sample**"
          requirements="**Markdown sample**"
          name="Awesome component"
        />
      </ApolloProvider>
    </AppConfig>,
    div
  );
  expect(container.querySelectorAll('.PanelStyled').length).toEqual(4);
});
