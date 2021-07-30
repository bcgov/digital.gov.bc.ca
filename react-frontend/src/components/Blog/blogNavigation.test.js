import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogNavigation, { PrevNextButton } from './blogNavigation';
import { AppConfig } from '../../providers/AppConfig';
import { MockedProvider } from '@apollo/react-testing';
import { renderWithRouterMatch } from '../../tests/helperFunctions/routerWrapper';

const originalError = console.error;

beforeAll(() => {
  console.error = (...args: any[]) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    if (/Error: connect ECONNREFUSED 127.0.0.1:80/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

afterEach(cleanup);

it('Renders without crashing if no props are passed in', () => {
  const div = document.createElement('div');
  renderWithRouterMatch(BlogNavigation, {
    route: '/project/ABC123',
    path: '/project/:id',
  });
});

const mockBlogUIDs = [
  'test-title',
  'embeded-video',
  'digital-government-in-2020-not-if-but-how',
];

it('reders both prev and next when middle blog uid is provided', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <PrevNextButton blogUIDs={mockBlogUIDs} uid={mockBlogUIDs[1]} />
    </BrowserRouter>
  );
  expect(getByTestId('next')).not.toBeNull();
  expect(getByTestId('prev')).not.toBeNull();
});

it('reders only reders prev when the first uid is provided', () => {
  const { getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <PrevNextButton blogUIDs={mockBlogUIDs} uid={mockBlogUIDs[0]} />
    </BrowserRouter>
  );
  expect(queryByTestId('next')).toBeNull();
  expect(getByTestId('prev')).not.toBeNull();
});

it('reders only reders next when the last uid is provided', () => {
  const { getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <PrevNextButton blogUIDs={mockBlogUIDs} uid={mockBlogUIDs[2]} />
    </BrowserRouter>
  );
  expect(queryByTestId('prev')).toBeNull();
  expect(getByTestId('next')).not.toBeNull();
});

it('reders nothing when an invalid uid is passed in', () => {
  const { getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <PrevNextButton blogUIDs={mockBlogUIDs} uid={'Fake-uid'} />
    </BrowserRouter>
  );
  expect(queryByTestId('prev')).toBeNull();
  expect(queryByTestId('next')).toBeNull();
});
