import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';
import InfoCard from '../Home/infocard';

function Guides() {
  return (
    <div className="guides">
      <div>
        <h2 className="resourceInfoTitle">Guides</h2>
      </div>
      <div className="resourceInfo">
        <Grid>
          <Row>
            <Col sm={12} md={6}>
              <div className="guidesInfo">
                <img
                  className="guidesImg"
                  src="https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg"
                  alt="example"
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                isRouteCard
                title="Video Communication Platforms"
                description="When you can’t meet with your coworkers or clients face-to-face, communicating with them by video can be the next best thing. There are many options available for video communication platforms or tools, many of which can also be used for instant messaging or chat, screen sharing and transferring files."
                linkText="More"
                routePath="guides/communication-platforms"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Guides;
