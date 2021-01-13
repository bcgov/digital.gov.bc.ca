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
  title,
  description,
  numberOfUsers,
  onboardingTime,
  supportSchedule,
  cost,
  status,
  tags,
}) {
  const colourPicker = (maintenanceStatus) => {
    if (maintenanceStatus == 'ActiveDevelopment') {
      return <BadgeDot color="green" title="Active Development" />;
    }
    if (maintenanceStatus == 'Maintained') {
      return <BadgeDot color="yellow" title="Maintained" />;
    }
    if (maintenanceStatus == 'Abandoned') {
      return <BadgeDot color="red" title="Abandoned" />;
    }
  };

  return (
    <CardStyled>
      <Badge>
        {colourPicker(status?.Maintenance)} {status?.Status}
      </Badge>
      {tags?.map((tag, i) => {
        if (i < 2) {
          return <Badge key={tag.name}>{tag.name}</Badge>;
        }
      })}
      {/*  up to three tags */}
      {/* link to the uid coco page */}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <span>
        <Icon src={priceIcon} /> {cost}
        <Icon src={peopleIcon} /> {numberOfUsers} Teams
        <Icon src={clockIcon} /> {onboardingTime}
        <Icon src={assistantIcon} /> {supportSchedule}
      </span>
    </CardStyled>
  );
}

export default CoCoCard;
