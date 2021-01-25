import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CoCoCard from './coCoCard';

afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoCoCard></CoCoCard>, div);
});

it('Renders all fields when props passed in', () => {
  const { getByTestId } = render(
    <CoCoCard
      title="Test Name"
      description="An awesome description"
      numberOfUsers="66"
      onboardingTime="days"
      supportSchedule="247"
      cost="Free"
      status={{ Maintenance: 'ActiveDevelopment', Status: 'On Fire' }}
      tags={[{ name: 'one' }, { name: 'two' }]}
      uid="TestUID"
    />
  );
  expect(getByTestId('title')).toHaveTextContent('Test Name');
  expect(getByTestId('description')).toHaveTextContent(
    'An awesome description'
  );
});

it('Expect 3 tags displayed when 3 tags passed in', () => {
  const { getAllByTestId } = render(
    <CoCoCard
      title="Test Name"
      description="An awesome description"
      numberOfUsers="66"
      onboardingTime="days"
      supportSchedule="247"
      cost="Free"
      status={{ Maintenance: 'ActiveDevelopment', Status: 'On Fire' }}
      tags={[{ name: 'one' }, { name: 'two' }, { name: 'three' }]}
      uid="TestUID"
    />
  );
  expect(getAllByTestId('tag-badge').length).toEqual(3);
});

it('Expect only 3 tags displayed when 4 or more tags passed in', () => {
  const { getAllByTestId } = render(
    <CoCoCard
      title="Test Name"
      description="An awesome description"
      numberOfUsers="66"
      onboardingTime="days"
      supportSchedule="247"
      cost="Free"
      status={{ Maintenance: 'ActiveDevelopment', Status: 'On Fire' }}
      tags={[
        { name: 'one' },
        { name: 'two' },
        { name: 'three' },
        { name: 'four' },
      ]}
      uid="TestUID"
    />
  );
  expect(getAllByTestId('tag-badge').length).toEqual(3);
});
