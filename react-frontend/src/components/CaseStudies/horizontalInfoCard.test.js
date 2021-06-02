import Item from 'antd/lib/list/Item';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HorizontalInfoCard from './horizontalInfoCard';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

it('Renders an internal route if a routepath prop is passed in', () => {
  const { getByTestId, queryByTestId } = render(
    <Router>
      <HorizontalInfoCard routePath="/fake/route" />
    </Router>
  );
  expect(getByTestId('internal-link')).not.toBeNull();
  expect(queryByTestId('external-link')).toBeNull();
});

it('Renders an external route if no routepath prop is passed in', () => {
  const { getByTestId, queryByTestId } = render(
    <Router>
      <HorizontalInfoCard linkPath="www.gov.bc.ca" />
    </Router>
  );
  expect(getByTestId('external-link')).not.toBeNull();
  expect(queryByTestId('internal-link')).toBeNull();
});
