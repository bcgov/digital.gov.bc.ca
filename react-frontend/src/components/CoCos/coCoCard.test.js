import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Route from 'react-router-dom';
import CoCoCard from './coCoCard';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <CoCoCard></CoCoCard>
    </Router>,
    div
  );
});

it('Renders all fields when props passed in', () => {
  const { getByTestId } = render(
    <Router>
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
    </Router>
  );
  expect(getByTestId('title')).toHaveTextContent('Test Name');
  expect(getByTestId('description')).toHaveTextContent(
    'An awesome description'
  );
});

it('Expect 3 tags displayed when 3 tags passed in', () => {
  const { getAllByTestId } = render(
    <Router>
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
    </Router>
  );
  expect(getAllByTestId('tag-badge').length).toEqual(3);
});

it('Expect only 3 tags displayed when 4 or more tags passed in', () => {
  const { getAllByTestId } = render(
    <Router>
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
    </Router>
  );
  expect(getAllByTestId('tag-badge').length).toEqual(3);
});
