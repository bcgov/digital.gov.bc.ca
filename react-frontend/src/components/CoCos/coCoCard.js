import React from 'react';
import 'antd/dist/antd.css';
import { Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

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

// This function will be used on coCoPage as well
export const Badges = (status, maintenanceStatus, tags, colour) => {
  return (
    <BadgeWrapper>
      <Badge data-testid="status-badge" background={colour}>
        {status}
      </Badge>
      <Badge data-testid="status-badge" background={colour}>
        {maintenanceStatus}
      </Badge>
      {/* Only display 3 tags */}
      {tags?.map((tag, i) => {
        if (i > 2) {
          return null;
        }
        return (
          <Badge data-testid="tag-badge" key={tag.name} background={colour}>
            {tag.name}
          </Badge>
        );
      })}
    </BadgeWrapper>
  );
};

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
  return (
    <Link to={`cocos/${uid}`}>
      <CardStyled>
        {Badges(status?.Status, status?.Maintenance, tags)}
        <CardTitle data-testid="title">{title}</CardTitle>
        <CardDescription data-testid="description">
          {description}
        </CardDescription>
        <Row center="xs">
          <IconCol data-testid="cost" xs={6} sm={3}>
            {' '}
            <Icon src={priceIcon} /> {cost}
          </IconCol>
          <IconCol data-testid="user-count" xs={6} sm={3}>
            <Icon src={peopleIcon} /> {numberOfUsers} Teams
          </IconCol>
          <IconCol data-testid="onboarding-time" xs={6} sm={3}>
            <Icon src={clockIcon} /> {onboardingTime}
          </IconCol>
          <IconCol data-testid="support-schedule" xs={6} sm={3}>
            <Icon src={assistantIcon} /> {supportSchedule}
          </IconCol>
        </Row>
      </CardStyled>
    </Link>
  );
}

export default CoCoCard;
