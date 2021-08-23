import React from 'react';
import renderer from 'react-test-renderer';
import Resources from './resources';
import { MockedProvider } from '@apollo/react-testing';
import { AppConfig } from '../../providers/AppConfig';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <Router>
            <Resources />
          </Router>
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
