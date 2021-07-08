import React from 'react';
import renderer from 'react-test-renderer';
import Courses from './courses';
import { MockedProvider } from '@apollo/react-testing';
import { AppConfig } from '../../providers/AppConfig';

it('renders snapshot correctly', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <Courses />
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
