import React from 'react';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import { Col, Row } from 'react-flexbox-grid';

import Query from '../Query';
import BLOGS_QUERY from '../../queries/blog/blogs';

import BlogCard from './blogCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';

const comunitiesImage = require('../../images/pngIllustrations/communityWhite.png')
  .default;

function BlogHome() {
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
          <Query query={BLOGS_QUERY}>
            {({ data: { blogPosts } }) => {
              return (
                <Row style={{ marginBottom: '4px' }}>
                  {blogPosts?.map((blogPost, i) => {
                    return (
                      <Col xs={12} md={6} lg={4} key={blogPost?.uid}>
                        <BlogCard
                          title={blogPost?.Title}
                          description={blogPost?.SubTitle}
                          uid={blogPost?.uid}
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

export default BlogHome;
