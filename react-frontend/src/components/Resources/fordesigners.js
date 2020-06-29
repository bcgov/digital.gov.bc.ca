import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

function ForDesigners() {
  return (
    <div className="forDesigners">
      <div className="resourceInfoTitle">For Designers</div>
      <Grid>
        <Row>
          <Col md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity?keyword=visual&keyword=identity">
                  B.C. Visual Identity Program (Gov Mark)
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/cms-lite-manual">
                  CMS Lite User's Manual
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/content-design?keyword=Content&keyword=Design&keyword=and&keyword=Writing&keyword=Group&keyword=%28CDAWG%29">
                  Content Design Guide
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-style-guide">
                  Web Style Guide
                </a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a href="https://developer.gov.bc.ca/Design-System/About-the-Design-System">
                  Design System
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/plain-language-guide?keyword=plain&keyword=language&keyword=guide">
                  Plain Language Guide
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design/service-design-phases">
                  Service Design Phases
                </a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/writingforservices?keyword=Service&keyword=writing&keyword=guide">
                  Service Writing Guide
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://bcgov.github.io/user-research-guide/">
                  User Research Guide
                </a>
              </div>
              <div className="resourceLink">
                <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/visual-design-guide?keyword=visual&keyword=identity">
                  Visual Design Guide
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
