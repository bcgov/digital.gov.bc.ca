import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';
import InfoCard from '../Home/infocard';
import VideoImg from '../../images/videocomms.png';

function Guides() {
  return (
    <div className="resourceBlock">
      <div className="resourceInfo">
        <div>
          <h2 className="resourceInfoTitle">Guides</h2>
        </div>
        <Grid>
          <Row>
            <Col sm={12} md={6}>
              <div className="guidesInfo">
                <img className="guidesImg" src={VideoImg} alt="example" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Video Communication Platforms'}
                description={
                  'When you can’t meet with your coworkers or clients face-to-face, communicating with them by video can be the next best thing. There are many options available for video communication platforms or tools, many of which can also be used for instant messaging or chat, screen sharing and transferring files.'
                }
                // linkText={'More'}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Guides;
