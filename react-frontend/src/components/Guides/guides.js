import React from 'react';
import Query from '../Query';
import { Col, Row, Grid } from 'react-flexbox-grid';

import InfoCard from '../Home/infocard';
import SimpleBanner from '../SimpleBanner/simpleBanner';
import GUIDES_QUERY from '../../queries/guide/guides';

const GuidesPage = () => {
  return (
    <div className="pageContainer">
      <SimpleBanner
        title="Useful Guides"
        description="Guides to help public sector employees embrace modern digital technology."
      />
      <div className="guides">
        <Grid className="cardAdjustment">
          <Query query={GUIDES_QUERY}>
            {({ data: { guides } }) => {
              return (
                <Row>
                  {guides.map((guide, i) => {
                    return (
                      <Col sm={12} md={6} key={guide.uid}>
                        <InfoCard
                          title={guide.title}
                          description={guide.summary}
                          linkText={'Explore'}
                          routePath={`guides/${guide.uid}`}
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

export default GuidesPage;
