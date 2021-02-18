import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MinistryUse from './ministryUse';

afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MinistryUse></MinistryUse>, div);
});

it('Gives alt text warning if invalid acronym supplied', () => {
  const { getByAltText } = render(
    <MinistryUse acronym="FAKE" summary="Test Ministry" />
  );
  getByAltText('Invalid ministry acronym provided');
});

it('Gives alt text for ministry if valid acronym supplied', () => {
  const { getByAltText } = render(
    <MinistryUse acronym="FLNR" summary="Test Ministry" />
  );
  getByAltText(
    'Forests, Lands, Natural Resource Operations and Rural Development'
  );
});
