import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StyleRichText } from './styledMarkdown';
import { MockedProvider } from '@apollo/react-testing';
import { AppConfig } from '../../providers/AppConfig';

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

it('It returns a parsed markdown calss when a non-html string is passed in', () => {
  const div = document.createElement('div');
  const testString = 'The rain in spain is awesome.';
  const { container } = render(
    <AppConfig>
      <MockedProvider>
        <StyleRichText htmlOrMarkdown={testString} />
      </MockedProvider>
    </AppConfig>,
    div
  );
  expect(container.firstChild.classList.contains('parsedMarkdown')).toBe(true);
  expect(container.firstChild.classList.contains('parsedHTML')).toBe(false);
});

it('It returns a parsed HTML calss when an html string is passed in', () => {
  const div = document.createElement('div');
  const testString = '<p>The rain in spain is awesome.</p>';
  const { container } = render(
    <AppConfig>
      <MockedProvider>
        <StyleRichText htmlOrMarkdown={testString} />
      </MockedProvider>
    </AppConfig>,
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
    <AppConfig>
      <MockedProvider>
        <StyleRichText htmlOrMarkdown={testString} />
      </MockedProvider>
    </AppConfig>,
    div
  );
  expect(container.firstChild.classList.contains('parsedMarkdown')).toBe(false);
  expect(container.firstChild.classList.contains('parsedHTML')).toBe(true);
});
