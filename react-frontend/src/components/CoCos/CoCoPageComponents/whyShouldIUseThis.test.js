import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WhyShouldIUseThis from './whyShouldIUseThis';

afterEach(cleanup);

it('Renders without crashing if no props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhyShouldIUseThis />, div);
});

it('Renders three subheadings if all props are passed in', () => {
  const whyObject = {
    Heading: 'test 1',
    Details: "one is the lonelies number that you'll ever be",
    __typename: 'ComponentCoCoWhyShouldIuSeThis',
  };
  const whyList = [whyObject, whyObject, whyObject];
  const div = document.createElement('div');
  const { container } = render(
    <WhyShouldIUseThis whyShouldIUseThis={whyList} />,
    div
  );
  expect(container.querySelectorAll('.subHeading').length).toEqual(3);
});
