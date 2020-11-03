import React from 'react';
import { Link } from 'react-router-dom';

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

const HorizontalInfoCard = (props) => {
  return (
    <CardHorizontal>
      <CardHorizontalImage backgroundImage={props.img} />
      <CardHorizontalText>
        <CardHorizontalTitle>{props.title}</CardHorizontalTitle>
        <CardHorizontalDescription>
          {props.description}
        </CardHorizontalDescription>
        {props.routePath ? (
          <HrefLinkStandaloneInternal to={props.routePath}>
            {props.linkText}
          </HrefLinkStandaloneInternal>
        ) : (
          <HrefLinkStandalone
            href={props.linkPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText}
          </HrefLinkStandalone>
        )}
      </CardHorizontalText>
    </CardHorizontal>
  );
};

export default HorizontalInfoCard;
