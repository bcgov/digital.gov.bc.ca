import React from 'react';
import 'antd/dist/antd.css';
import { Badge as AntBadge } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { Badge, BadgeDot } from '../StyleComponents/badge';
import {
  CardTitle,
  CardDescription,
  CardIllustration,
  CardLinkDiv,
  CardStyled,
  Icon,
} from '../StyleComponents/card';
import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';

const assistantIcon = require('../../images/icons/assistant-24.png');
const peopleIcon = require('../../images/icons/conference-24.png');
const priceIcon = require('../../images/icons/price-tag-24.png');
const clockIcon = require('../../images/icons/stopWatch.png');

function CoCoCard({
  height,
  routePath,
  title,
  description,
  numberOfUsers,
  onboardingTime,
  supportSchedule,
  cost,
}) {
  var isRouteCard = false;

  if (routePath != null) {
    isRouteCard = true;
  }
  return (
    <CardStyled>
      <Badge>
        <BadgeDot color="red" /> Blah
      </Badge>
      {/* status bubble, up to three tags */}
      {/* hover text on status bubble */}
      {/* link to the uid coco page */}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <span>
        <Icon src={priceIcon} /> {cost}
        <Icon src={peopleIcon} /> {numberOfUsers} Teams
        <Icon src={clockIcon} /> {onboardingTime}
        <Icon src={assistantIcon} /> {supportSchedule}
      </span>
      {/* cost, numberusers, spinuptime support */}
    </CardStyled>
  );
}

export default CoCoCard;
