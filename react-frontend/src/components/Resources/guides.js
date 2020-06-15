import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';
import InfoCard from '../Home/infocard.js';

function Guides() {
  return (
    <div className="guides">
      <div className="resourceInfoTitle">Guides</div>
      <div className="resourceInfo">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <InfoCard
                title={'Video Communication Platforms'}
                description={
                  'When you can’t meet with your coworkers or clients face-to-face, communicating with them by video can be the next best thing. There are many options available for video communication platforms or tools, many of which can also be used for instant messaging or chat, screen sharing and transferring files.'
                }
                linkText={'More'}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="guidesInfo">
                <div className="resourceLink">
                  <a href="/#">Social Media Guidelines</a>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Guides;
