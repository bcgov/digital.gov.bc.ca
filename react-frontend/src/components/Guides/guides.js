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
        description="It's dangerous to go it alone, take these."
      />

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
                          routePath={`guides/${guide.UID}`}
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
