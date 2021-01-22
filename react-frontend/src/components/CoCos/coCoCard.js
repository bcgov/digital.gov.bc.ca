import React from 'react';
import 'antd/dist/antd.css';
import { Row, Grid } from 'react-flexbox-grid';

import { Badge, BadgeDot, BadgeWrapper } from '../StyleComponents/badge';
import {
  CardTitle,
  CardDescription,
  CardStyled,
  Icon,
  IconCol,
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

  //TODO:use uid to link to the specific coco page.
  return (
    <CardStyled>
      <BadgeWrapper>
        <Badge data-testid="status-badge">
          {colourPicker(status?.Maintenance)} {status?.Status}
        </Badge>
        {/* Only display 3 tags */}
        {tags?.map((tag, i) => {
          if (i > 2) {
            return null;
          }
          return (
            <Badge data-testid="tag-badge" key={tag.name}>
              {tag.name}
            </Badge>
          );
        })}
      </BadgeWrapper>
      <CardTitle data-testid="title">{title}</CardTitle>
      <CardDescription data-testid="description">{description}</CardDescription>
      <Row center="xs">
        <IconCol data-testid="cost" xs={3}>
          {' '}
          <Icon src={priceIcon} /> {cost}
        </IconCol>
        <IconCol data-testid="user-count" xs={3}>
          <Icon src={peopleIcon} /> {numberOfUsers} Teams
        </IconCol>
        <IconCol data-testid="onboarding-time" xs={3}>
          <Icon src={clockIcon} /> {onboardingTime}
        </IconCol>
        <IconCol data-testid="support-schedule" xs={3}>
          <Icon src={assistantIcon} /> {supportSchedule}
        </IconCol>
      </Row>
    </CardStyled>
  );
}

export default CoCoCard;
