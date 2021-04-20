import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StyleRichText } from './styledMarkdown';

afterEach(cleanup);

it('It returns a parsed markdown calss when a non-html string is passed in', () => {
  const div = document.createElement('div');
  const testString = 'The rain in spain is awesome.';
  const { container } = render(
    <StyleRichText htmlOrMarkdown={testString} />,
    div
  );
  expect(container.firstChild.classList.contains('parsedMarkdown')).toBe(true);
  expect(container.firstChild.classList.contains('parsedHTML')).toBe(false);
});

it('It returns a parsed HTML calss when an html string is passed in', () => {
  const div = document.createElement('div');
  const testString = '<p>The rain in spain is awesome.</p>';
  const { container } = render(
    <StyleRichText htmlOrMarkdown={testString} />,
    div
  );
  expect(container.firstChild.classList.contains('parsedMarkdown')).toBe(false);
  expect(container.firstChild.classList.contains('parsedHTML')).toBe(true);
});

it('It returns a parsed HTML calss when an html string is passed in', () => {
  const div = document.createElement('div');
  const testString =
    "The the place <a href='www.afakewebsite.com' /> is awesome.</p>";
  const { container } = render(
    <StyleRichText htmlOrMarkdown={testString} />,
    div
  );
  expect(container.firstChild.classList.contains('parsedMarkdown')).toBe(false);
  expect(container.firstChild.classList.contains('parsedHTML')).toBe(true);
});
