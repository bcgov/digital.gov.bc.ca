import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import '@testing-library/jest-dom/extend-expect';

import CoCoPage from './coCoPage';
import COCO_QUERY from '../../queries/coCos/coCo';

import { AppConfig } from '../../providers/AppConfig';
import { renderWithRouterMatch } from '../../tests/helperFunctions/routerWrapper';

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

it('renders the getstarted field correctly.', async () => {
  const cocoPage = [
    {
      uid: 'keycloak',
      Name: 'Keycloak 3',
      Description: 'blfwfonreqgqer a shoferreq',
      ProjectStatus: {
        Maintenance: 'ActiveDevelopment',
        Status: 'Mature',
      },
      TeamNameAndMinistry: 'KeyCloak Mistry of Magic',
      Tags: [
        {
          name: 'API',
        },
        {
          name: 'Bumble',
        },
      ],
      CostStructure: {
        Cost: 'Freemium',
        PaymentStructure: 'regergergererfrf',
      },
      NumberOfUsers: 333,
      OnboardingTime: 'Days',
      SupportSchedule: 'MonFriday',
      CoverImage: {
        url: '/uploads/the_Gentleman_305308f135.png',
      },
      WhyShouldIUseThis: [
        {
          Heading: 'test 1',
          Details: 'blha blah',
        },
        {
          Heading: 'blah blah',
          Details: 'blah blah blah ',
        },
        {
          Heading: 'bublefa',
          Details: 'nergeqrgeqr',
        },
      ],
      WhoIsUsingThis: [
        {
          ministry: {
            MinistryAcronym: 'EDUC',
          },
          Summary: 'jjj',
        },
        {
          ministry: {
            MinistryAcronym: 'FIN',
          },
          Summary: 'veavev',
        },
        {
          ministry: {
            MinistryAcronym: 'FIN',
          },
          Summary: 'bbhare',
        },
      ],
      GetStartedURL: 'https://www.testgetstarted.com',
      CoCoWebsite: 'https://www.CoCo.com',
      GetStartedSteps: '<p>this is how you get started</p>',
      ServiceLevelSupport:
        '<h2>refeqrgeqrg</h2><p><strong>this is bold</strong></p><p><i><strong>this is bold italic</strong></i></p><p><a href="https://www.youtube.com">This<i><strong> </strong></i>Is a link</a></p><ul><li>bullet one</li><li>bullet two</li></ul><p>Numbering:</p><ol><li>number one</li><li>number two</li></ol>',
      AdditionalTechnicalInformation: 'jbvafvfadv',
      RequirementsAndRestrictions: 'rreracc',
      Support: 'cdVVV',
      MonthAndYearCreated: null,
    },
  ];

  const mocks = [
    {
      request: {
        query: COCO_QUERY,
        variables: {
          uid: 'keycloak',
        },
      },
      result: {
        data: {
          coCos: cocoPage,
        },
      },
    },
  ];
  const { getByText } = renderWithRouterMatch(
    CoCoPage,
    {
      route: '/common-components/keycloak',
      path: '/common-components/:uid',
    },
    mocks
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getByText('this is how you get started'));
  // expect(getByTestId("how-to-start").getByText("this is how you get started"))//.toContain("this is how you get started");
});
