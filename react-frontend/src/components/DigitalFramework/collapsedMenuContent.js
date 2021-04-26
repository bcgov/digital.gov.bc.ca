import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { ministryNames } from '../../constants/ministryDictionary';

import { StyleRichText } from '../StyleComponents/styledMarkdown';
import { DigitalFrameworkHeading } from '../StyleComponents/htmlTags';

function CollapsedMenuContent({ content }) {
  return (
    <div>
      <Row>
        <Col xs={10}>
          <p>{content?.Description}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DigitalFrameworkHeading>Lead Ministry</DigitalFrameworkHeading>
          <p>Ministry of {ministryNames[content?.ministry?.MinistryAcronym]}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <DigitalFrameworkHeading>
            The Problem Being Addressed
          </DigitalFrameworkHeading>
          <p>{content?.ProblemStatement}</p>
        </Col>
        <Col xs={12} md={6}>
          <DigitalFrameworkHeading>
            For more information
          </DigitalFrameworkHeading>
          <StyleRichText htmlOrMarkdown={content?.MoreInformation} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DigitalFrameworkHeading>
            Current Reporting Period
          </DigitalFrameworkHeading>
          <p>{content?.ReportingPeriod}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <DigitalFrameworkHeading>Achievements</DigitalFrameworkHeading>
          <StyleRichText htmlOrMarkdown={content?.Achievements} />
        </Col>
        <Col xs={12} md={4}>
          <DigitalFrameworkHeading>Milestones</DigitalFrameworkHeading>
          <StyleRichText htmlOrMarkdown={content?.Milestones} />
        </Col>
        <Col xs={12} md={4}>
          <DigitalFrameworkHeading>Future Plans</DigitalFrameworkHeading>
          <StyleRichText htmlOrMarkdown={content?.FuturePlans} />
        </Col>
      </Row>
    </div>
  );
}

export default CollapsedMenuContent;
