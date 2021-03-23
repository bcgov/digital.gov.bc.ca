import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CollapsedMenus from './collapsedMenus';

afterEach(cleanup);

it('Renders no collapse panels if no props are passed in', () => {
  const div = document.createElement('div');
  const { container } = render(<CollapsedMenus />, div);
  expect(container.querySelectorAll('.PanelStyled').length).toEqual(0);
});

it('Renders 4 collapse panels if all props passed in', () => {
  const div = document.createElement('div');
  const { container } = render(
    <CollapsedMenus
      price="**Markdown sample**"
      service="**Markdown sample**"
      technicalInfo="**Markdown sample**"
      requirements="**Markdown sample**"
      name="Awesome component"
    />,
    div
  );
  expect(container.querySelectorAll('.PanelStyled').length).toEqual(4);
});
