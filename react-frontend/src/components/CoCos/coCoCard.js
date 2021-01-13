import React from 'react';
import 'antd/dist/antd.css';

import { Badge, BadgeDot } from '../StyleComponents/badge';
import {
  CardTitle,
  CardDescription,
  CardStyled,
  Icon,
} from '../StyleComponents/card';

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
  uid,
}) {
  const colourPicker = (maintenanceStatus) => {
    if (maintenanceStatus === 'ActiveDevelopment') {
      return <BadgeDot color="green" title="Active Development" />;
    }
    if (maintenanceStatus === 'Maintained') {
      return <BadgeDot color="yellow" title="Maintained" />;
    }
    if (maintenanceStatus === 'Abandoned') {
      return <BadgeDot color="red" title="Abandoned" />;
    }
    return null;
  };

  //TODO:  use uid to link to the specific coco page.
  return (
    <CardStyled>
      <Badge>
        {colourPicker(status?.Maintenance)} {status?.Status}
      </Badge>
      {/* Only display 3 tags */}
      {tags?.map((tag, i) => {
        if (i > 2) {
          return null;
        }
        return <Badge key={tag.name}>{tag.name}</Badge>;
      })}
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
