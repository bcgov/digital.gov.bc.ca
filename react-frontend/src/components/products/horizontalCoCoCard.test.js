import Item from 'antd/lib/list/Item';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HorizontalCoCoCard from './horizontalCoCoCard';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

it('Renders renders without crashing when no props passed in', () => {
  const { getByTestId, queryByTestId } = render(
    <Router>
      <HorizontalCoCoCard routePath="/fake/route" />
    </Router>
  );
});
