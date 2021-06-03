import React from 'react';

import {
  CardHorizontal,
  CardHorizontalDescription,
  CardHorizontalCoCoImage,
  CardHorizontalText,
  CardHorizontalTitle,
} from '../StyleComponents/card';

import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';

const HorizontalCoCoCard = ({
  img,
  title,
  description,
  routePath,
  linkText,
}) => {
  return (
    <CardHorizontal style={{ width: '100%' }}>
      <CardHorizontalCoCoImage>
        <img src={img} style={{ height: '200px', margin: '20px' }} />
      </CardHorizontalCoCoImage>
      <CardHorizontalText style={{ height: 'auto' }}>
        <CardHorizontalTitle>{title}</CardHorizontalTitle>
        <CardHorizontalDescription>{description}</CardHorizontalDescription>
        <HrefLinkStandaloneInternal to={routePath}>
          {linkText}
        </HrefLinkStandaloneInternal>
      </CardHorizontalText>
    </CardHorizontal>
  );
};

export default HorizontalCoCoCard;
