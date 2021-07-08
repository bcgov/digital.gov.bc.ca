import React from 'react';
import renderer from 'react-test-renderer';
import Events from './events';
import { MockedProvider } from '@apollo/react-testing';
import { AppConfig } from '../../providers/AppConfig';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <Events />
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
