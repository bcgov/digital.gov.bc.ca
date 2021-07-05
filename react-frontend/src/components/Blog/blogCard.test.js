import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogCard from './blogCard';
import { BrowserRouter as Router } from 'react-router-dom';


afterEach(cleanup);

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <BlogCard></BlogCard>
    </Router>,
    div
  );
});

it('Renders all fields when props passed in', () => {
  const { getByTestId, queryByTestId } = render(
    <Router>
      <BlogCard
        title="Test Name"
        description="An awesome description"
        uid="TestUID"
        authImg="www.testurl.com"
        author="jon"
        coverImgSrc="www.testurl.com"
      />
    </Router>
  );
  expect(getByTestId('title')).toHaveTextContent('Test Name');
  expect(getByTestId('description')).toHaveTextContent(
    'An awesome description'
  );
  expect(queryByTestId('thumbnail')).not.toBeNull();
  expect(queryByTestId('authorImage')).not.toBeNull();
});

it('Renders no images if image urls are not passed in as props', () => {
  const { getByTestId, queryByTestId } = render(
    <Router>
      <BlogCard
        title="Test Name"
        description="An awesome description"
        uid="TestUID"
        author="jon"
      />
    </Router>
  );
  expect(getByTestId('title')).toHaveTextContent('Test Name');
  expect(getByTestId('description')).toHaveTextContent(
    'An awesome description'
  );
  expect(queryByTestId('thumbnail')).toBeNull();
  expect(queryByTestId('authorImage')).toBeNull();
});
