import React from 'react';

import {
  CardHorizontal,
  CardHorizontalDescription,
  CardHorizontalImage,
  CardHorizontalText,
  CardHorizontalTitle,
} from '../StyleComponents/card';

import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';

const HorizontalInfoCard = ({
  img,
  title,
  description,
  routePath,
  linkText,
  linkPath,
}) => {
  return (
    <CardHorizontal>
      <CardHorizontalImage backgroundImage={img} />
      <CardHorizontalText>
        <CardHorizontalTitle>{title}</CardHorizontalTitle>
        <CardHorizontalDescription>{description}</CardHorizontalDescription>
        {routePath ? (
          <HrefLinkStandaloneInternal to={routePath}>
            {linkText}
          </HrefLinkStandaloneInternal>
        ) : (
          <HrefLinkStandalone
            href={linkPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </HrefLinkStandalone>
        )}
      </CardHorizontalText>
    </CardHorizontal>
  );
};

export default HorizontalInfoCard;
