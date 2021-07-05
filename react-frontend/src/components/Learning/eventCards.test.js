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
import TestRenderer from 'react-test-renderer';

const originalError = console.error;

beforeAll(() => {
  console.error = (...args: any[]) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }

    // originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});


afterEach(cleanup);

// const updateWrapper = async (wrapper, time = 10) => {
//   await act(async () => {
//     await new Promise(res => setTimeout(res, time));
//   });
// };



// {
//   Name: "Name 2",
//   Description: "Description 1",
//   Url: "https://www.test.ca",
//   ImageUrl: "https://www.test.ca/img",
//   IsCourse: true,
//   IsSeries: true,
//   SeriesUID: "111123",
//   EventID: "123456",
//   StartTime: "2021-07-07T16:00:00.000Z",
// },
// {
//   Name: "Name 3",
//   Description: "Description 1",
//   Url: "https://www.test.ca",
//   ImageUrl: "https://www.test.ca/img",
//   IsCourse: true,
//   IsSeries: true,
//   SeriesUID: "1111234",
//   EventID: "123456",
//   StartTime: "2021-07-07T16:00:00.000Z",
// }

const event_1 = {
  Description: "This training session will cover DevOps platform training (application operational tasks).",
  EventID: "157516176123",
  ImageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84023453%2F228490647317%2F1%2Foriginal.20191209-202014?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=97829c2dd293c5d12488f12e84d251b8",
  IsCourse: true,
  IsSeries: true,
  Name: "OpenShift 101",
  SeriesUID: "85533754763",
  StartTime: "2021-07-07T16:00:00.000Z",
  Url: "https://www.eventbrite.ca/e/openshift-101-tickets-157516176123",
  __typename: "EventbriteEvent",
}

it('Renders only one card for each series.', async () => {
  const mocks = [
    {
      request: {
        query: EVENTS_QUERY,
        variables: { isClass: true }
      },
      result:
      {
        "data": {
          "eventbriteEvents": [
            {
              "Name": "OpenShift 101",
              "Description": "This training session will cover DevOps platform training (application operational tasks).",
              "Url": "https://www.eventbrite.ca/e/openshift-101-tickets-157516176123",
              "ImageUrl": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84023453%2F228490647317%2F1%2Foriginal.20191209-202014?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=97829c2dd293c5d12488f12e84d251b8",
              "IsCourse": true,
              "IsSeries": true,
              "SeriesUID": "85533754763",
              "EventID": "157516176123",
              "StartTime": "2021-07-07T16:00:00.000Z"
            },
            {
              "Name": "OpenShift 101: Lab",
              "Description": "This training session will cover DevOps platform training (application operational tasks)",
              "Url": "https://www.eventbrite.ca/e/openshift-101-lab-tickets-157516787953",
              "ImageUrl": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129393863%2F228490647317%2F1%2Foriginal.20210317-174720?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C577%2C4618%2C2309&s=8126e133f45d7dc998ab280ee803a1a9",
              "IsCourse": true,
              "IsSeries": true,
              "SeriesUID": "146658530613",
              "EventID": "157516787953",
              "StartTime": "2021-07-08T16:00:00.000Z"
            },
            {
              "Name": "UX 101",
              "Description": "What User Experience is, why it matters and the process of creating a usable, useful and delightful user experience in this online course.",
              "Url": "https://www.eventbrite.ca/e/ux-101-tickets-154764407509",
              "ImageUrl": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F111731217%2F228490647317%2F1%2Foriginal.20200916-205909?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=26fa9032a90cb7e4f6e783236aecc824",
              "IsCourse": true,
              "IsSeries": true,
              "SeriesUID": "121444223943",
              "EventID": "154764407509",
              "StartTime": "2021-07-21T20:45:00.000Z"
            },
            {
              "Name": "OpenShift 101",
              "Description": "This training session will cover DevOps platform training (application operational tasks).",
              "Url": "https://www.eventbrite.ca/e/openshift-101-tickets-157516402801",
              "ImageUrl": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84023453%2F228490647317%2F1%2Foriginal.20191209-202014?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=97829c2dd293c5d12488f12e84d251b8",
              "IsCourse": true,
              "IsSeries": true,
              "SeriesUID": "85533754763",
              "EventID": "157516402801",
              "StartTime": "2021-08-25T16:00:00.000Z"
            },
            {
              "Name": "OpenShift 101: Lab",
              "Description": "This training session will cover DevOps platform training (application operational tasks)",
              "Url": "https://www.eventbrite.ca/e/openshift-101-lab-tickets-157516810019",
              "ImageUrl": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129393863%2F228490647317%2F1%2Foriginal.20210317-174720?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C577%2C4618%2C2309&s=8126e133f45d7dc998ab280ee803a1a9",
              "IsCourse": true,
              "IsSeries": true,
              "SeriesUID": "146658530613",
              "EventID": "157516810019",
              "StartTime": "2021-08-26T16:00:00.000Z"
            }
          ]
        }
      }
    }
  ]

  const component = TestRenderer.create(
    <AppConfig>
      <MockedProvider mocks={mocks} addTypename={false}>
        <EventCards isCourse={true} />
      </MockedProvider>
    </AppConfig>)

  await new Promise(resolve => setTimeout(resolve, 1000));
  const p = component.root.findByType('p');
  expect(p.children).toContain('Buck is a poodle');

  // const { getAllByTestId, queryByTestId } = render(component);
  // await updateWrapper(component);

  // expect(getAllByTestId('title')[0]).toHaveTextContent('Name 1');

});
