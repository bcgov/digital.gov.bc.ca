import Item from 'antd/lib/list/Item';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardList from './cardList';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

it('Renders 7 cards on the home page', () => {
  const { getAllByTestId } = render(
    <Router>
      <CardList />
    </Router>
  );
  expect(getAllByTestId('styled-card').length).toBe(6);
});
