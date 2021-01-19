import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
// import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import '@testing-library/jest-dom/extend-expect';

import Query from './index';

afterEach(cleanup);

// const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
// })
const mocks = []; // We'll fill this in next

it('renders without error', () => {
  const { findByText } = render(
    // <ApolloProvider client={null}>
    <MockedProvider mocks={mocks} addTypename={false}>
      <Query />
    </MockedProvider>
    // </ApolloProvider>,
  );

  expect(findByText('Loading...'));
});

// it('Renders without crashing if not props are passed in', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<CoCoCard></CoCoCard>, div);
// });
