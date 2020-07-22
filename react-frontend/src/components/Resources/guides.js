import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';
import VideoImg from '../../images/videocomms.png';
import HorizontalInfoCard from '../CaseStudies/horizontalinfocard';

const videoCommsImg = require('../../images/videocomms.png');

function Guides() {
  return (
    <div className="resourceBlock">
      <div className="resourceInfo">
        <div>
          <h2 className="resourceInfoTitle">Guides</h2>
        </div>
        <Grid className="cardAdjustment">
          <Row>
            <Col sm={24} md={12}>
              <HorizontalInfoCard
                title={'Video Communication Platforms'}
                img={videoCommsImg}
                description={
                  'When you can’t meet with your coworkers or clients face-to-face, communicating with them by video can be the next best thing. There are many options available for video communication platforms or tools, many of which can also be used for instant messaging or chat, screen sharing and transferring files.'
                }
                linkText={'More'}
                routePath={'guides/communication-platforms'}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Guides;
