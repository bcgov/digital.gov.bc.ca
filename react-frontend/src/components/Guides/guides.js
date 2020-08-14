import React from 'react';
import Query from '../Query';
import { Col, Row, Grid } from 'react-flexbox-grid';

import InfoCard from '../Home/infocard';

import GUIDES_QUERY from '../../queries/guide/guides';

const GuidePage = () => {
  return (
    <div className="pageContainer">
      <div className="pageBannerSimple">
        <h1>Useful Guides</h1>
      </div>
      <div className="guides">
        <Grid className="cardAdjustment">
          <Query query={GUIDES_QUERY} id={null}>
            {({ data: { guides } }) => {
              return (
                <Row>
                  {guides.map((guide, i) => {
                    return (
                      <Col sm={12} md={6}>
                        <InfoCard
                          title={guide.Title}
                          description={guide.Summary}
                          linkText={'Explore'}
                          linkPath={'https://github.com/bcgov'}
                          height="300px"
                        />
                      </Col>
                    );
                  })}
                </Row>
              );
            }}
          </Query>
        </Grid>
      </div>
    </div>
  );
};

export default GuidePage;
