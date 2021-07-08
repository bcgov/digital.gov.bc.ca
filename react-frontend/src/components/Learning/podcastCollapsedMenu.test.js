import React from 'react';
import renderer from 'react-test-renderer';
import PodcastCollapsedMenu from './podcastCollapsedMenu';

it('renders correctly', () => {
  const tree = renderer.create(<PodcastCollapsedMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
