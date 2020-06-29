import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import InfoCard from '../Home/infocard';

function ForDevelopers() {
  return (
    <div className="forDevelopers">
      <div className="resourceInfoTitle">For Developers</div>
      <div className="resourceInfo">
        <Grid>
          <Row>
            <Col sm={12} md={6}>
              <InfoCard
                title={'BCGov on Github'}
                description={
                  'Explore hundreds of open source code repositories that are being maintained by the teams who are building modern digital services in British Columbia.'
                }
                linkText={'Explore'}
                linkPath={'https://github.com/bcgov'}
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'DevHub'}
                description={
                  'One place that brings together resources for developers building digital products for the BC Government.'
                }
                linkText={'Visit Site'}
                linkPath={'https://developer.gov.bc.ca/'}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default ForDevelopers;
