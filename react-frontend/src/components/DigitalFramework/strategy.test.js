import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Strategy from './strategy';

afterEach(cleanup);

it('Renders without crashing', () => {
  const div = document.createElement('div');
  const { container } = render(<Strategy />, div);
});
