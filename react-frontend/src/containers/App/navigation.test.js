// Test for jest-cucumber

import React from "react";
import ReactDOM from 'react-dom';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, cleanup } from '@testing-library/react';
import App from "./index.js";
import { AppConfig } from '../../providers/AppConfig';
import { MockedProvider } from '@apollo/react-testing';



describe.skip('Navigating to main pages',()=>{  // NOTE: remove skip to enable this test
  const feature = loadFeature('src/containers/App/navigation.feature');
  defineFeature(feature, (test) => {

    afterEach(cleanup);
    beforeEach(() => {
      
    });
    const AppConfigContext = React.createContext();
    const mocks = [];
    global.scrollTo = jest.fn();


    test('Navigating to main pages', ({ given, when, then, and }) => {
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

      and(/^I click (.*)$/,(navItem)=>{
          screen.getAllByText(navItem)[0].click()
      })

      then(/^I should be on the (.*) page$/, (navItem) => {
          expect(screen.getAllByText(navItem).length).not.toBe(0);
      });
    });
  })
});