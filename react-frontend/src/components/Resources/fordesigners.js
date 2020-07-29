import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const linkIcon = (
  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ paddingLeft: '5px' }} />
);

function ForDesigners() {
  return (
    <div className="resourceBlock">
      <div>
        <h2 className="resourceInfoForTitle">For Designers</h2>
      </div>
      <Grid className="cardAdjustment">
        <Row>
          <Col md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity?keyword=visual&keyword=identity"
                >
                  B.C. Visual Identity Program (Gov Mark)
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/cms-lite-manual"
                >
                  CMS Lite User's Manual
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/content-design?keyword=Content&keyword=Design&keyword=and&keyword=Writing&keyword=Group&keyword=%28CDAWG%29"
                >
                  Content Design Guide
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-style-guide"
                >
                  Web Style Guide
                  {linkIcon}
                </a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://developer.gov.bc.ca/Design-System/About-the-Design-System"
                >
                  Design System
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/plain-language-guide?keyword=plain&keyword=language&keyword=guide"
                >
                  Plain Language Guide
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design/service-design-phases"
                >
                  Service Design Phases
                  {linkIcon}
                </a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/writingforservices?keyword=Service&keyword=writing&keyword=guide"
                >
                  Service Writing Guide
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://bcgov.github.io/design-research-guide/"
                >
                  Design Research Guide
                  {linkIcon}
                </a>
              </div>
              <div className="resourceLink">
                <a
                  target="_blank"
                  href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/visual-design-guide?keyword=visual&keyword=identity"
                >
                  Visual Design Guide
                  {linkIcon}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default ForDesigners;
