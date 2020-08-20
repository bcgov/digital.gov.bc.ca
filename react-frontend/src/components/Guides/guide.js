import React from 'react';
import Query from '../Query';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';
import InfoCard from '../Home/infocard';
import SimpleBanner from '../SimpleBanner/simpleBanner';
import GUIDE_QUERY from '../../queries/guide/guide';
import { useParams } from 'react-router-dom';

const GuidePage = ({ UID }) => {
  const params = useParams();
  return (
    <div className="pageContainer">
      <SimpleBanner
        title="Test guide page"
        description="It's dangerous to go it alone, take these."
      />

      <div className="guide">
        <Grid className="cardAdjustment">
          <Query query={GUIDE_QUERY} UID={params.uid}>
            {({ data: { guides } }) => {
              return (
                <div>
                  <h1>{guides[0].Title}</h1>
                  <ReactMarkdown source={guides[0].Content} />
                </div>
              );
            }}
          </Query>
        </Grid>
      </div>
    </div>
  );
};

export default GuidePage;
