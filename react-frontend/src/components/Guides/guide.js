import React from 'react';
import Query from '../Query';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';
import SimpleBanner from '../SimpleBanner/simpleBanner';
import GUIDE_QUERY from '../../queries/guide/guide';
import { useParams } from 'react-router-dom';
import {
  SimpleTextContainer,
  GlobaStyleSize,
} from '../StyleComponents/pageContent';

const GuidePage = ({ UID }) => {
  const params = useParams();
  return (
    <div>
      <SimpleBanner
        title="Test guide page"
        description="It's dangerous to go it alone, take these."
      />
      <SimpleTextContainer>
        <GlobaStyleSize />

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
      </SimpleTextContainer>
    </div>
  );
};

export default GuidePage;
