import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

function ForDesigners() {
  return (
    <div className="forDesigners">
      <div className="resourceInfoTitle">For Designers</div>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a href="/#">B.C. Visual Identity Program (Gov Mark)</a>
              </div>
              <div className="resourceLink">
                <a href="/#">CMS Lite User's Manual</a>
              </div>
              <div className="resourceLink">
                <a href="/#">Content Design Guide</a>
              </div>
              <div className="resourceLink">
                <a href="/#">Web Style Guide</a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a href="/#">Design System</a>
              </div>
              <div className="resourceLink">
                <a href="/#">Plain Language Guide</a>
              </div>
              <div className="resourceLink">
                <a href="/#">Service Design Phases</a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="forDesignersInfo">
              <div className="resourceLink">
                <a href="/#">Service Writing Guide</a>
              </div>
              <div className="resourceLink">
                <a href="/#">User Research Guide</a>
              </div>
              <div className="resourceLink">
                <a href="/#">Visual Design Guide</a>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default ForDesigners;
