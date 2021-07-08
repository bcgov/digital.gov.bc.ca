import React from 'react';
import renderer from 'react-test-renderer';
import Learning from './learning';
import { MockedProvider } from '@apollo/react-testing';
import { AppConfig } from '../../providers/AppConfig';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <Learning />
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
