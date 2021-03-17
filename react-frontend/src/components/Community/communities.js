import React from 'react';
// import CoCoCards from './coCoCards.js';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import { Col, Row } from 'react-flexbox-grid';

import Query from '../Query';
import COMMUNITIES_QUERY from '../../queries/community/communities';

import CommunityCard from './communityCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';

const comunitiesImage = require('../../images/pngIllustrations/communityWhite.png');

function Communities() {
  return (
    <DocumentTitle title="Communities - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Communities'}
          content={
            'The digital delivery network within the BC Public Service is active and growing. Connect, learn, and contribute!'
          }
          image={comunitiesImage}
        />
        <ContentBlockContainer style={{ paddingTop: '50px' }}>
          <Query query={COMMUNITIES_QUERY}>
            {({ data: { communityPages } }) => {
              return (
                <Row style={{ marginBottom: '4px' }}>
                  {communityPages?.map((communityPage, i) => {
                    return (
                      <Col xs={12} sm={6} md={4} key={communityPage?.uid}>
                        <CommunityCard
                          title={communityPage?.Title}
                          description={communityPage?.Description}
                          uid={communityPage?.uid}
                        />
                      </Col>
                    );
                  })}
                </Row>
              );
            }}
          </Query>
        </ContentBlockContainer>
      </div>
    </DocumentTitle>
  );
}

export default Communities;
