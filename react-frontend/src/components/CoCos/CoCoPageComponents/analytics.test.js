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
  const { getByTestId, getAllByTestId } = render(
    <Analytics
      coCoName="Steve"
      numberOfUsers="37"
      creationDate={{ Year: 2019, Month: "July" }}
      whoIsUsingThis={whoList}
    />,
    div
  );
  expect(getByTestId('date')).toHaveTextContent('July 2019');
  expect(getAllByTestId('ministry').length).toBe(3)
  expect(getByTestId('numberOfUsers')).not.toBeNull()
});

it('Only renders two ministries if two are passed in', () => {
  const whoObject = {
    Summary: 'We keep citizens informed',
    ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
  };
  const whoList = [whoObject, whoObject];
  const div = document.createElement('div');
  const { getByTestId, getAllByTestId } = render(
    <Analytics
      coCoName="Steve"
      numberOfUsers="37"
      creationDate={{ Year: 2019, Month: "July" }}
      whoIsUsingThis={whoList}
    />,
    div
  );
  expect(getByTestId('date')).toHaveTextContent('July 2019');
  expect(getAllByTestId('ministry').length).toBe(2)
  expect(getByTestId('numberOfUsers')).not.toBeNull()
});

it('Does not render the ministry parent if none are passed in', () => {
  const div = document.createElement('div');
  const { getByTestId, queryByTestId } = render(
    <Analytics
      coCoName="Steve"
      numberOfUsers="37"
      creationDate={{ Year: 2019, Month: "July" }}
    />,
    div
  );
  expect(getByTestId('date')).toHaveTextContent('July 2019');
  expect(queryByTestId('ministries')).toBeNull()
  expect(getByTestId('numberOfUsers')).not.toBeNull()
});

it('Does not render year if none passed in', () => {
  const whoObject = {
    Summary: 'We keep citizens informed',
    ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
  };
  const whoList = [whoObject, whoObject];
  const div = document.createElement('div');
  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <Analytics
      coCoName="Steve"
      numberOfUsers="37"
      creationDate={{ Month: "July" }}
      whoIsUsingThis={whoList}
    />,
    div
  );
  expect(queryByTestId('date')).toBeNull();
  expect(getAllByTestId('ministry').length).toBe(2)
  expect(getByTestId('numberOfUsers')).not.toBeNull()
});

it('Does not render numberOfUsers if none passed in', () => {
  const whoObject = {
    Summary: 'We keep citizens informed',
    ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
  };
  const whoList = [whoObject, whoObject];
  const div = document.createElement('div');
  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <Analytics
      coCoName="Steve"
      creationDate={{ Year: 2025, Month: "July" }}
      whoIsUsingThis={whoList}
    />,
    div
  );
  expect(getByTestId('date')).toHaveTextContent('July 2025');
  expect(getAllByTestId('ministry').length).toBe(2)
  expect(queryByTestId('numberOfUsers')).toBeNull()
});