import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import '@testing-library/jest-dom/extend-expect';

import EventCards from './eventCards';
import EVENTS_QUERY from '../../queries/learning/events';

import { AppConfig } from '../../providers/AppConfig';
import { get } from 'react-scroll/modules/mixins/scroller';

const originalError = console.error;

beforeAll(() => {
  console.error = (...args: any[]) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    if (/Error: connect ECONNREFUSED 127.0.0.1:80/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

afterEach(cleanup);

it('Renders only the first card for each series of classes.', async () => {
  const events = [
    {
      Name: 'OpenShift 101',
      Description: 'test description 1',
      Url: 'https://www.eventbrite.ca/6176123',
      ImageUrl: 'https://img.evbuc.com/51b8',
      IsCourse: true,
      IsSeries: true,
      SeriesUID: '85533754763',
      EventID: '157516176123',
      StartTime: '2021-07-07T16:00:00.000Z',
    },
    {
      Name: 'UX 101',
      Description: 'test description 2',
      Url: 'https://www.eventbrite.ca/',
      ImageUrl: 'https://img.evbuc.com/cc824',
      IsCourse: true,
      IsSeries: true,
      SeriesUID: '121444223943',
      EventID: '154764407509',
      StartTime: '2021-07-21T20:45:00.000Z',
    },
    {
      Name: 'OpenShift 101',
      Description: 'test description 3',
      Url: 'https://www.eventbrite.ca/',
      ImageUrl: 'https://img.evbuc.com/b8',
      IsCourse: true,
      IsSeries: true,
      SeriesUID: '85533754763',
      EventID: '157516402801',
      StartTime: '2021-08-25T16:00:00.000Z',
    },
    {
      Name: 'OpenShift 101',
      Description: 'test description 4',
      Url: 'https://www.eventbrite.ca/',
      ImageUrl: 'https://img.evbuc.com/b8',
      IsCourse: true,
      IsSeries: true,
      SeriesUID: '',
      EventID: '157516402802',
      StartTime: '2021-09-25T16:00:00.000Z',
    },
  ];

  const mocks = [
    {
      request: {
        query: EVENTS_QUERY,
        variables: { isClass: true },
      },
      result: {
        data: {
          eventbriteEvents: events,
        },
      },
    },
  ];

  const { getAllByTestId } = render(
    <AppConfig>
      <MockedProvider mocks={mocks} addTypename={false}>
        <EventCards isCourse={true} />
      </MockedProvider>
    </AppConfig>
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getAllByTestId('title')[0]).toHaveTextContent('OpenShift 101');
  expect(getAllByTestId('description')[0]).toHaveTextContent(
    'test description 1'
  );
  expect(getAllByTestId('description').length).toBe(3);
  expect(getAllByTestId('title')[1]).toHaveTextContent('UX 101');
  expect(getAllByTestId('description')[1]).toHaveTextContent(
    'test description 2'
  );
  expect(getAllByTestId('description')[2]).toHaveTextContent(
    'test description 4'
  );
});

it('Renders only the first card for each series of non classes.', async () => {
  const events = [
    {
      Name: 'OpenShift 101',
      Description: 'test description 1',
      Url: 'https://www.eventbrite.ca/6176123',
      ImageUrl: 'https://img.evbuc.com/51b8',
      IsCourse: false,
      IsSeries: true,
      SeriesUID: '85533754763',
      EventID: '157516176123',
      StartTime: '2021-07-07T16:00:00.000Z',
    },
    {
      Name: 'UX 101',
      Description: 'test description 2',
      Url: 'https://www.eventbrite.ca/',
      ImageUrl: 'https://img.evbuc.com/cc824',
      IsCourse: false,
      IsSeries: true,
      SeriesUID: '121444223943',
      EventID: '154764407509',
      StartTime: '2021-07-21T20:45:00.000Z',
    },
    {
      Name: 'OpenShift 101',
      Description: 'test description 3',
      Url: 'https://www.eventbrite.ca/',
      ImageUrl: 'https://img.evbuc.com/b8',
      IsCourse: false,
      IsSeries: true,
      SeriesUID: '85533754763',
      EventID: '157516402801',
      StartTime: '2021-08-25T16:00:00.000Z',
    },
    {
      Name: 'OpenShift 101',
      Description: 'test description 4',
      Url: 'https://www.eventbrite.ca/',
      ImageUrl: 'https://img.evbuc.com/b8',
      IsCourse: false,
      IsSeries: true,
      SeriesUID: '',
      EventID: '157516402802',
      StartTime: '2021-09-25T16:00:00.000Z',
    },
  ];

  const mocks = [
    {
      request: {
        query: EVENTS_QUERY,
        variables: { isClass: false },
      },
      result: {
        data: {
          eventbriteEvents: events,
        },
      },
    },
  ];

  const { getAllByTestId } = render(
    <AppConfig>
      <MockedProvider mocks={mocks} addTypename={false}>
        <EventCards isCourse={false} />
      </MockedProvider>
    </AppConfig>
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getAllByTestId('title')[0]).toHaveTextContent('OpenShift 101');
  expect(getAllByTestId('description')[0]).toHaveTextContent(
    'test description 1'
  );
  expect(getAllByTestId('description').length).toBe(3);
  expect(getAllByTestId('title')[1]).toHaveTextContent('UX 101');
  expect(getAllByTestId('description')[1]).toHaveTextContent(
    'test description 2'
  );
  expect(getAllByTestId('description')[2]).toHaveTextContent(
    'test description 4'
  );
});
