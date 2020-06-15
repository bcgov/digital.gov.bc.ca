import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

function Standards() {
  return (
    <div className="standards">
      <div className="resourceInfoTitle">Standards & Policy</div>
      <div className="resourceInfo">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="standardInfo">
                <div className="standardInfoTitle">
                  <p>Standards</p>
                </div>
                <div className="resourceLink">
                  <a href="/#">Ministry IM/IT Policies and Standards</a>
                </div>
                <div className="resourceLink">
                  <a href="/#">Web Standards</a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="standardInfo">
                <div className="standardInfoTitle">
                  <p>Privacy</p>
                </div>
                <div className="resourceLink">
                  <a href="/#">Privacy Management & Accountability Policy</a>
                </div>
                <div className="resourceLink">
                  <a href="/#">Privacy and Personal Information</a>
                </div>
                <div className="resourceLink">
                  <a href="/#">Privacy Impact Assessments</a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="standardInfo">
                <div className="standardInfoTitle">
                  <p>Security</p>
                </div>
                <div className="resourceLink">
                  <a href="/#">Information Security Policy and Guidelines</a>
                </div>
                <div className="resourceLink">
                  <a href="/#">Security Threat and Risk Assessments</a>
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
