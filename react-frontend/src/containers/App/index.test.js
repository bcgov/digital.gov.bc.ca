import React from "react";
import ReactDOM from 'react-dom';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, cleanup } from '@testing-library/react';
import App from "./index.js";
import { AppConfig } from '../../providers/AppConfig';
import { MockedProvider } from '@apollo/react-testing';

const feature = loadFeature('src/containers/App/index.feature');

defineFeature(feature, (test) => {

  afterEach(cleanup);
  beforeEach(() => {
    
  });
  const AppConfigContext = React.createContext();
  const mocks = []; // We'll fill this in next

  test('Visiting home screen', ({ given, when, then }) => {
    when('I visit home screen', () => {
        render(
          <AppConfig>
            <AppConfigContext.Provider value={{ state: { strapiApiUrl: 'www.fake.com' } }}>
              <MockedProvider mocks={mocks} addTypename={false}>
                <App />
              </MockedProvider>
            </AppConfigContext.Provider>
          </AppConfig>);
    });

    then('the title should say "Digital Government"', () => {
        // screen.debug();
        expect(screen.getAllByText("Digital Government").length).toBe(2);
    });
  });
});