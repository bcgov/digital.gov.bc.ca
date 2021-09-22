import React from 'react';
import 'antd/dist/antd.css';
import { Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import { Badge, BadgeWrapper } from '../StyleComponents/badge';
import {
  CoCoCardTitle,
  CoCoCardDescription,
  CoCoCardHeader,
  CoCoCardStyled,
  Icon,
  IconCol,
} from '../StyleComponents/card';

const assistantIcon = require('../../images/icons/assistant-24.png').default;
const peopleIcon = require('../../images/icons/conference-24.png').default;
const priceIcon = require('../../images/icons/price-tag-24.png').default;
const clockIcon = require('../../images/icons/stopWatch.png').default;

const maintenanceStatusObj = {
  ActiveDevelopment: 'Active Development',
  Maintained: 'Maintained',
  Abandoned: 'Abandoned',
};

const supportStructureObj = {
  MonFriday: 'Mon-Fri',
  TwentyfourSeven: '24/7',
  None: 'None',
};

// This function will be used on coCoPage as well
export const Badges = (status, maintenanceStatus, tags, colour) => {
  return (
    <BadgeWrapper>
      {status && (
        <Badge
          data-testid="status-badge"
          background={colour}
          title="Software Status"
        >
          {status}
        </Badge>
      )}
      {maintenanceStatusObj[maintenanceStatus] && (
        <Badge
          data-testid="status-badge"
          background={colour}
          title="Maintenance Status"
        >
          {maintenanceStatusObj[maintenanceStatus]}
        </Badge>
      )}
      {/* Only display 3 tags */}
      {tags?.map((tag, i) => {
        if (i > 10) {
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
  nameAndMinistry,
  numberOfUsers,
  onboardingTime,
  supportSchedule,
  cost,
  status,
  tags,
  uid,
}) {
  return (
    <CoCoCardStyled to={`/common-components/${uid}`}>
      <CoCoCardHeader>
        {Badges(status?.Status, status?.Maintenance, tags)}
        <CoCoCardTitle data-testid="title" style={{ marginBottom: '0' }}>
          {title}
        </CoCoCardTitle>
        <p>{nameAndMinistry}</p>
      </CoCoCardHeader>
      {/* This is commented out until a design desision is made */}
      {/* <CardDescription
        data-testid="description"
        style={{ marginBottom: '40px' }}
      > */}
      <CoCoCardDescription data-testid="description">
        {description}
      </CoCoCardDescription>
      {/* This is commented out until a design desision is made  */}
      {/* <Row
        start="xs"
        style={{ bottom: '20px', position: 'absolute', width: '90%' }}
      >
        <IconCol
          data-testid="cost"
          xs={3}
          title="Cost Structure"
          style={{ paddingLeft: '0' }}
        >
          <Row center="xs" style={{ height: '18px' }}>
            <Icon src={priceIcon} />
          </Row>
          <Row center="xs">{cost}</Row>
        </IconCol>
        {numberOfUsers && (
          <IconCol
            data-testid="user-count"
            xs={3}
            title={'Number of Teams Using CoCo'}
          >
            <Row center="xs" style={{ height: '18px' }}>
              <Icon src={peopleIcon} style={{ paddingRight: '2px' }} />
              {numberOfUsers}
            </Row>
            <Row center="xs">Teams</Row>
          </IconCol>
        )}
        <IconCol
          data-testid="onboarding-time"
          xs={3}
          title="Estimate of Onboarding Time"
        >
          <Row center="xs" style={{ height: '18px' }}>
            <Icon src={clockIcon} />
          </Row>
          <Row center="xs">{onboardingTime}</Row>
        </IconCol>
        <IconCol
          data-testid="support-schedule"
          xs={3}
          title="Support Availability"
        >
          <Row center="xs" style={{ height: '18px' }}>
            <Icon src={assistantIcon} />
          </Row>
          <Row center="xs">{supportStructureObj[supportSchedule]}</Row>
        </IconCol>
      </Row> */}
    </CoCoCardStyled>
  );
}

export default CoCoCard;
