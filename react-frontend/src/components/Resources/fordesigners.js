import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import HorizontalInfoCard from '../CaseStudies/horizontalInfoCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageSubHeading } from '../StyleComponents/headings';
import {
  HrefLinkStandalone,
  ResourceLinkRow,
} from '../StyleComponents/htmlTags';

import { designersUrls } from '../../constants/urls';
import ResourceCard from './resourceCard';

const videoCommsImg = require('../../images/videocomms.png').default;

const linkIcon = (
  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ paddingLeft: '5px' }} />
);

function ForDesigners() {
  return (
    <ContentBlockContainer id="forDesigners">
      <Row>
        <Col sm={12} lg={6}>
          <ResourceLinkRow>
            <ResourcePageSubHeading>For Designers</ResourcePageSubHeading>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.VisualIdentityProgram}
            >
              B.C. Visual Identity Program (Gov Mark) {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.CMSLiteUsersManual}
            >
              CMS Lite User's Manual {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.ContentDesignGuide}
            >
              Content Design & Strategy {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.DesignResearchGuide}
            >
              Design Research Guide {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.DesignSystem}
            >
              Design System {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.PlainLanguageGuide}
            >
              Plain Language Course {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.ServiceDesignPhases}
            >
              Service Design Phases {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.ServiceWritingGuide}
            >
              Writing Services for the Web {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.VisualDesignGuide}
            >
              Visual Design Guide {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
          <ResourceLinkRow>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href={designersUrls.WebStyleGuide}
            >
              Web Style Guide {linkIcon}
            </HrefLinkStandalone>
          </ResourceLinkRow>
        </Col>
        <Col sm={12} lg={6}>
          <ResourceCard
            title="Video Communication Platforms"
            description="When you can’t meet with your coworkers or clients face-to-face, communicating with them by video can be the next best thing. There are many options available for video communication platforms or tools, many of which can also be used for instant messaging or chat, screen sharing and transferring files."
            route="guides/communication-platforms"
            imgSrc={videoCommsImg}
          />
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default ForDesigners;
