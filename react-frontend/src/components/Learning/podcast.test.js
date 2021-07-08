import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import '@testing-library/jest-dom/extend-expect';

import Podcast from './podcast';
import PODCASTS_QUERY from '../../queries/learning/podcasts';

import { AppConfig } from '../../providers/AppConfig';

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

it('renders snapshot correctly', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <Podcast />
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders three podcasts if 3 are returned.', async () => {
  const podcasts = [
    {
      AirDate: '2021-06-15',
      CoverImage: {
        url: '/uploads/testImg.png',
      },
      Description:
        'It is a long established fact that a reader will be distracted by the reada.',
      EpisodeNumber: 5,
      Link: 'https://bcdevexchange.org/',
      Title: 'Long content 3',
    },
    {
      AirDate: '2021-06-15',
      CoverImage: {
        url: '/uploads/testImg.png',
      },
      Description:
        'It is a long established fact that a reader will be distracted by the reada.',
      EpisodeNumber: 5,
      Link: 'https://bcdevexchange.org/',
      Title: 'Long content 2',
    },
    {
      AirDate: '2021-06-15',
      CoverImage: {
        url: '/uploads/testImg.png',
      },
      Description:
        'It is a long established fact that a reader will be distracted by the reada.',
      EpisodeNumber: 5,
      Link: 'https://bcdevexchange.org/',
      Title: 'Long content',
    },
  ];

  const mocks = [
    {
      request: {
        query: PODCASTS_QUERY,
        variables: {},
      },
      result: {
        data: {
          podcasts: podcasts,
        },
      },
    },
  ];

  const { getAllByTestId } = render(
    <AppConfig>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Podcast />
      </MockedProvider>
    </AppConfig>
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getAllByTestId('podcast-title').length).toBe(3);
});
