import React from 'react';
import renderer from 'react-test-renderer';
import EventCard from './eventCard';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <EventCard
        name="steve"
        description="A great description"
        eventbriteUrl="https://test.com"
        coverImgSrc="https://testIMG.com"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
