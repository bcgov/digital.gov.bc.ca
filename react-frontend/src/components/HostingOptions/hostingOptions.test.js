import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { AppConfig } from '../../providers/AppConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import HostingOptions from './hostingOptions';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppConfig>
        <MockedProvider>
          <Router>
            <HostingOptions />
          </Router>
        </MockedProvider>
      </AppConfig>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
