import React from 'react';

import { Collapse } from 'antd';
import { Col, Row } from 'react-flexbox-grid';

import { ministryNames } from '../../constants/ministryDictionary';

import { PanelStyled } from '../StyleComponents/collapseMenu';
import { ReactMarkdownStyled } from '../StyleComponents/styledMarkdown';
import { DigitalFrameworkHeading } from '../StyleComponents/htmlTags';

function CollapsedMenuContent({ projects }) {
  // This filler content will be deleted when the page fixed.
  const content = {
    Achievements: 'blah',
    Description:
      'The 10 Digital Principles guide digital service development and delivery across government and serve as a “north star” for future development and refinement of IM/IT policies, standards, processes, procedures and guidelines. ',
    FuturePlans: 'blah',
    Milestones: 'blah',
    MoreInformation: 'blah',
    Name: 'Keycloak',
    ProblemStatement: 'blha',
    ReportingPeriod: 'June 2021',
    ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
  };

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
        <Col xs={12} sm={8}>
          <DigitalFrameworkHeading>
            The Problem Being Addressed
          </DigitalFrameworkHeading>
          <p>{content?.ProblemStatement}</p>
        </Col>
        <Col xs={12} sm={4}>
          <DigitalFrameworkHeading>
            For more information
          </DigitalFrameworkHeading>
          <ReactMarkdownStyled source={content?.MoreInformation} />
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
        <Col xs={12} sm={4}>
          <DigitalFrameworkHeading>Achievements</DigitalFrameworkHeading>
          <ReactMarkdownStyled source={content?.Achievements} />
        </Col>
        <Col xs={12} sm={4}>
          <DigitalFrameworkHeading>Milestones</DigitalFrameworkHeading>
          <ReactMarkdownStyled source={content?.Milestones} />
        </Col>
        <Col xs={12} sm={4}>
          <DigitalFrameworkHeading>Future Plans</DigitalFrameworkHeading>
          <ReactMarkdownStyled source={content?.FuturePlans} />
        </Col>
      </Row>
    </div>
  );
}

export default CollapsedMenuContent;
