import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { AppConfig } from '../../../providers/AppConfig';

import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';

import CoCoBannerSideImage from './coCoBannerSideImage';

afterEach(cleanup);

it('Renders without crashing if no props are passed in', () => {
  const div = document.createElement('div');
  const AppConfigContext = React.createContext();
  act(() => {
    ReactDOM.render(
      <AppConfig>
        <AppConfigContext.Provider
          value={{ state: { strapiApiUrl: 'www.fake.com' } }}
        >
          <CoCoBannerSideImage />
        </AppConfigContext.Provider>
      </AppConfig>,
      div
    );
  });
});
