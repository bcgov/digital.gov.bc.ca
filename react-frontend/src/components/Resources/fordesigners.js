import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageSubHeading } from '../StyleComponents/headings';
import { HrefLinkStandalone } from '../StyleComponents/htmlTags';

const linkIcon = (
  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ paddingLeft: '5px' }} />
);

function ForDesigners() {
  return (
    <ContentBlockContainer id="forDesigners">
      <Grid>
        <Row>
          <Col sm={12}>
            <Row>
              <ResourcePageSubHeading>For Designers</ResourcePageSubHeading>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity?keyword=visual&keyword=identity"
              >
                B.C. Visual Identity Program (Gov Mark) {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/cms-lite-manual"
              >
                CMS Lite User's Manual {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/content-design?keyword=Content&keyword=Design&keyword=and&keyword=Writing&keyword=Group&keyword=%28CDAWG%29"
              >
                Content Design Guide {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://bcgov.github.io/design-research-guide/"
              >
                Design Research Guide {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.gov.bc.ca/Design-System/About-the-Design-System"
              >
                Design System {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/plain-language-guide?keyword=plain&keyword=language&keyword=guide"
              >
                Plain Language Guide {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design/service-design-phases"
              >
                Service Design Phases {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/writingforservices?keyword=Service&keyword=writing&keyword=guide"
              >
                Service Writing Guide {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/visual-design-guide?keyword=visual&keyword=identity"
              >
                Visual Design Guide {linkIcon}
              </HrefLinkStandalone>
            </Row>
            <Row>
              <HrefLinkStandalone
                target="_blank"
                rel="noopener noreferrer"
                href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-style-guide"
              >
                Web Style Guide {linkIcon}
              </HrefLinkStandalone>
            </Row>
          </Col>
        </Row>
      </Grid>
    </ContentBlockContainer>
  );
}

export default ForDesigners;
