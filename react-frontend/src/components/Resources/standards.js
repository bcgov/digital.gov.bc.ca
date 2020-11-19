import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageSubHeading } from '../StyleComponents/headings';
import {
  HrefLinkStandalone,
  ResourceLinkRow,
} from '../StyleComponents/htmlTags';
const linkIcon = (
  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ paddingLeft: '5px' }} />
);

function Standards() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        <Col md={12} lg={4}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>Technical</ResourcePageSubHeading>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/home/accessible-government/toolkit?keyword=accessibility&keyword=and&keyword=inclusion&keyword=toolkit"
            >
              Accessiblity and Inclusion Toolkit
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/im-it-standards/ministry-standards?keyword=im/it&keyword=ministry&keyword=standards"
            >
              Ministry IM/IT Policies and Standards
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-standards?keyword=web&keyword=standards"
            >
              Web Standards
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
        </Col>
        <Col md={12} lg={4}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>Privacy</ResourcePageSubHeading>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/privacy-policy?keyword=privacy&keyword=management"
            >
              Privacy Management & Accountability Policy
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy"
            >
              Privacy and Personal Information
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/privacy-impact-assessments?keyword=privacy&keyword=and&keyword=personal&keyword=information"
            >
              Privacy Impact Assessments
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
        </Col>
        <Col md={12} lg={4}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>Security</ResourcePageSubHeading>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/information-security-policy-and-guidelines"
            >
              Information Security Policy and Guidelines
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment?keyword=security&keyword=risk&keyword=threat&keyword=assessment"
            >
              Security Threat and Risk Assessments
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default Standards;
