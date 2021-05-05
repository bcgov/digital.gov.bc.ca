import React, { useState, useEffect, useContext } from 'react';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import { Col, Row } from 'react-flexbox-grid';
import { AppConfigContext } from '../../providers/AppConfig';

import { useQuery } from '@apollo/react-hooks';
import Query from '../Query';
import BLOGS_QUERY from '../../queries/blog/blogs';
import BLOGAUTHORS_QUERY from '../../queries/blog/blogAuthors';
import BlogCard from './blogCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';

const blogImage = require('../../images/pngIllustrations/communityWhite.png')
  .default;

function BlogHome() {
  const config = useContext(AppConfigContext);
  const strapiURL = config['state']['strapiApiUrl'];

  const { loading, error, data } = useQuery(BLOGAUTHORS_QUERY);

  const blogAuthorList = [];
  useEffect(() => {
    if (data) {
      data?.blogAuthors?.map((blogAuthor, i) => {
        blogAuthorList[i] = {
          Name: blogAuthor?.Name,
          Title: blogAuthor?.Title,
          thumbnailSource: strapiURL?.replace(
            '/graphql',
            blogAuthor?.Image?.formats?.thumbnail?.url
          ),
        };
      });
      console.log(blogAuthorList);
    }
  });

  return (
    <DocumentTitle title="Blog - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Blog'}
          content={
            'Read all the latest and the greatest about what’s happening in and around BC Government’s Digital space.'
          }
          image={blogImage}
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
