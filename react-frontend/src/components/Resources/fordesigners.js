import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import '../../css/resources.css';

import { ContentBlock } from '../StyleComponents/pageContent';
import { ResourcePageSubHeading } from '../StyleComponents/headings';
import { ColPadded, HrefLinkStandalone } from '../StyleComponents/htmlTags';

const linkIcon = (
  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ paddingLeft: '5px' }} />
);

function ForDesigners() {
  return (
    <ContentBlock>
      <ResourcePageSubHeading>For Designers</ResourcePageSubHeading>
      <Grid className="cardAdjustment">
        <Row>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity?keyword=visual&keyword=identity"
            >
              B.C. Visual Identity Program (Gov Mark) {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/cms-lite-manual"
            >
              CMS Lite User's Manual {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/content-design?keyword=Content&keyword=Design&keyword=and&keyword=Writing&keyword=Group&keyword=%28CDAWG%29"
            >
              Content Design Guide {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://bcgov.github.io/design-research-guide/"
            >
              Design Research Guide {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.gov.bc.ca/Design-System/About-the-Design-System"
            >
              Design System {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/plain-language-guide?keyword=plain&keyword=language&keyword=guide"
            >
              Plain Language Guide {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design/service-design-phases"
            >
              Service Design Phases {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/writingforservices?keyword=Service&keyword=writing&keyword=guide"
            >
              Service Writing Guide {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/visual-design-guide?keyword=visual&keyword=identity"
            >
              Visual Design Guide {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
          <ColPadded md={12}>
            <HrefLinkStandalone
              target="_blank"
              rel="noopener noreferrer"
              href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-style-guide"
            >
              Web Style Guide {linkIcon}
            </HrefLinkStandalone>
          </ColPadded>
        </Row>
      </Grid>
    </ContentBlock>
  );
}

export default ForDesigners;
