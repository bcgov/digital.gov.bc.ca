import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventCards from './eventCards';
import EVENTS_QUERY from '../../queries/learning/events';

import { AppConfig } from '../../providers/AppConfig';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { MockedProvider } from "@apollo/react-testing";

afterEach(cleanup);

const updateWrapper = async (wrapper, time = 10) => {
  await act(async () => {
    await new Promise(res => setTimeout(res, time));
  });
};

it('Renders only one card for each series.', async () => {
  const div = document.createElement('div');
  const mocks = [{
    request: {
      query: EVENTS_QUERY,
      variables: { isClass: true }
    },
    result: {
      data: {
        eventbriteEvents: [
          {
            Name: "Name 1",
            Description: "Description 1",
            Url: "https://www.test.ca",
            ImageUrl: "https://www.test.ca/img",
            IsCourse: true,
            IsSeries: true,
            SeriesUID: "111123",
            EventID: "123456",
            StartTime: "2021-07-07T16:00:00.000Z",
          }, {
            Name: "Name 2",
            Description: "Description 1",
            Url: "https://www.test.ca",
            ImageUrl: "https://www.test.ca/img",
            IsCourse: true,
            IsSeries: true,
            SeriesUID: "111123",
            EventID: "123456",
            StartTime: "2021-07-07T16:00:00.000Z",
          },
          {
            Name: "Name 3",
            Description: "Description 1",
            Url: "https://www.test.ca",
            ImageUrl: "https://www.test.ca/img",
            IsCourse: true,
            IsSeries: true,
            SeriesUID: "1111234",
            EventID: "123456",
            StartTime: "2021-07-07T16:00:00.000Z",
          }
        ]
      }
    }
  }]

  const component = (<AppConfig>
    <ApolloProvider
      client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
    >
      <MockedProvider mocks={mocks}>
        <EventCards isClass={true} />
      </MockedProvider>
    </ApolloProvider>
  </AppConfig>)

  const { getAllByTestId, queryByTestId } = render(component);
  await updateWrapper(component);

  expect(getAllByTestId('title')[0]).toHaveTextContent('Name 1');

});

it('Renders without crashing if the events are not classes.', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppConfig>
      <ApolloProvider
        client={new ApolloClient({ uri: 'http://localhost:3000/graphql' })}
      >
        <EventCards isClass={false} />
      </ApolloProvider>
    </AppConfig>,
    div
  );
});