import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Analytics from './analytics';

afterEach(cleanup);

it('Renders without crashing if no props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Analytics />, div);
});

it('Renders without crashing if all props are passed in', () => {
  const whoObject = {
    Summary: 'We keep citizens informed',
    ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
  };
  const whoList = [whoObject, whoObject, whoObject];
  const div = document.createElement('div');
  const { getByTestId } = render(
    <Analytics
      coCoName="Steve"
      numberOfUsers="37"
      creationDate={{ Year: 2019, Month: "July" }}
      whoIsUsingThis={whoList}
    />,
    div
  );
  expect(getByTestId('date')).toHaveTextContent('July 2019');
});
