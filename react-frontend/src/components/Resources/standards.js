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
import { standardsUrls } from '../../constants/urls';
import { HrefLinkInternal } from '../StyleComponents/htmlTags';

const linkIcon = (
  <FontAwesomeIcon
    icon={faExternalLinkAlt}
    className="fa-xs"
    style={{ marginLeft: '0.3em' }}
  />
);

function Standards() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        {/* <Col md={12} lg={4}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>Technical</ResourcePageSubHeading>
          </ResourceLinkRow>
          
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.MinistryIMITPoliciesAndStandards}
            >
              Ministry IM/IT Policies and Standards
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.WebStandards}
            >
              Web Standards & Guides {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
        </Col> */}

        <Col md={12} lg={6}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>Privacy</ResourcePageSubHeading>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.PrivacyManagementAccountabilityPolicy}
            >
              Privacy Management & Accountability Policy
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.PrivacyandPersonalInformation}
            >
              Privacy and Personal Information
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.PrivacyImpactAssessments}
            >
              Privacy Impact Assessments
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
        </Col>

        <Col md={12} lg={6}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>Security</ResourcePageSubHeading>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.InformationSecurityPolicyandGuidelines}
            >
              Information Security Policy and Guidelines
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={standardsUrls.SecurityThreatandRiskAssessments}
            >
              Security Threat and Risk Assessments
              {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
              <HrefLinkInternal
              to={'guides/communication-platforms'}
              style={{
                marginRight: 'auto',
                marginTop: 'auto',
                width: 'fit-content',
              }}
            >
              Advice about videoconferencing
            </HrefLinkInternal>
            </ResourceLinkRow>
        </Col>
      </Row>

     
    </ContentBlockContainer>
  );
}

export default Standards;
