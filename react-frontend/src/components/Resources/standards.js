import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

function Standards() {
  return (
    <div className="resourceBlock">
      <div className="resourceInfo">
        <Grid>
          <Row>
            <Col md={12} lg={4}>
              <div className="standardInfo">
                <div>
                  <p className="standardInfoTitle">Standards</p>
                </div>
                <div className="resourceLink">
                  <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/im-it-standards/ministry-standards?keyword=im/it&keyword=ministry&keyword=standards">
                    Ministry IM/IT Policies and Standards
                  </a>
                </div>
                <div className="resourceLink">
                  <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-standards?keyword=web&keyword=standards">
                    Web Standards
                  </a>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="standardInfo">
                <div>
                  <p className="standardInfoTitle">Privacy</p>
                </div>
                <div className="resourceLink">
                  <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/privacy-policy?keyword=privacy&keyword=management">
                    Privacy Management & Accountability Policy
                  </a>
                </div>
                <div className="resourceLink">
                  <a href="/https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy">
                    Privacy and Personal Information
                  </a>
                </div>
                <div className="resourceLink">
                  <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/privacy-impact-assessments?keyword=privacy&keyword=and&keyword=personal&keyword=information">
                    Privacy Impact Assessments
                  </a>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="standardInfo">
                <div>
                  <p className="standardInfoTitle">Security</p>
                </div>
                <div className="resourceLink">
                  <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/information-security-policy-and-guidelines">
                    Information Security Policy and Guidelines
                  </a>
                </div>
                <div className="resourceLink">
                  <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment?keyword=security&keyword=risk&keyword=threat&keyword=assessment">
                    Security Threat and Risk Assessments
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Standards;
