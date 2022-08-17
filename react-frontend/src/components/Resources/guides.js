import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import InfoCard from '../Home/infocard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageHeading } from '../StyleComponents/headings';
import { digitalCardLinks } from '../../constants/urls';

function Guides() {
  return (
    <ContentBlockContainer id="guides">
      <Row>
        <Col sm={12}>
          <ResourcePageHeading>Guides</ResourcePageHeading>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <InfoCard
            title="Low-Touch SaaS"
            description="How to acquire a low-touch Software as a Service (SaaS) solution."
            linkText="Read the guide"
            routePath="/resources/low-touch-saas"
            height="300px"
          />
        </Col>
        <Col sm={12} md={4}>
          <InfoCard
            title="Hosting Options"
            description="Learn about the infrastructure technologies available for hosting your digital service."
            linkText="View options for hosting"
            routePath="/resources/hosting-options"
            height="300px"
          />
        </Col>
        <Col sm={12} md={4}>
          <InfoCard
            title="Modern Application Playbook"
            description="A collection of references, tools, and best practices to help you navigate the development and support of government applications within an Agile framework."
            linkText="Read the playbook"
            linkPath={digitalCardLinks.IMBplaybook}
            height="300px"
          />
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default Guides;
