import React from 'react';
import renderer from 'react-test-renderer';
import PodcastBanner from './podcastBanner';

it('renders correctly', () => {
  const tree = renderer.create(<PodcastBanner />).toJSON();
  expect(tree).toMatchSnapshot();
});
