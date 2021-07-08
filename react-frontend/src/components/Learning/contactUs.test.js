import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import '@testing-library/jest-dom/extend-expect';

import ContactUs from './contactUs';
import LEARNING_ADMINS_QUERY from '../../queries/learning/learningAdmins';

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

it('renders two cards when two admins are created.', async () => {
  const learningAdmins = [
    {
      Email: 'test1@test.ca',
      HeadShot: {
        url: '/uploads/the_test.png',
      },
      Name: 'user one',
      Office: 'Exchange Lab',
      Role: 'Digital Talent Lead',
    },
    {
      Email: 'test2@test.ca',
      HeadShot: {
        url: '/uploads/the_test_2.png',
      },
      Name: 'user two',
      Office: 'Exchange Lab',
      Role: 'Community Lead',
    },
  ];

  const mocks = [
    {
      request: {
        query: LEARNING_ADMINS_QUERY,
        variables: {},
      },
      result: {
        data: {
          learningAdmins: learningAdmins,
        },
      },
    },
  ];

  const { getAllByTestId } = render(
    <AppConfig>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ContactUs />
      </MockedProvider>
    </AppConfig>
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getAllByTestId('learning-admin').length).toBe(2);
});

it('renders one card when one admin is created.', async () => {
  const learningAdmins = [
    {
      Email: 'test1@test.ca',
      HeadShot: {
        url: '/uploads/the_test.png',
      },
      Name: 'user one',
      Office: 'Exchange Lab',
      Role: 'Digital Talent Lead',
    },
  ];

  const mocks = [
    {
      request: {
        query: LEARNING_ADMINS_QUERY,
        variables: {},
      },
      result: {
        data: {
          learningAdmins: learningAdmins,
        },
      },
    },
  ];

  const { getAllByTestId } = render(
    <AppConfig>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ContactUs />
      </MockedProvider>
    </AppConfig>
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getAllByTestId('learning-admin').length).toBe(1);
});
