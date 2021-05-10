import React, { useContext } from 'react';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import { Col, Row } from 'react-flexbox-grid';
import { AppConfigContext } from '../../providers/AppConfig';

import Query from '../Query';
import BLOGS_QUERY from '../../queries/blog/blogs';
import BLOGAUTHORS_QUERY from '../../queries/blog/blogAuthors';
import BlogCard from './blogCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';

const blogImage = require('../../images/pngIllustrations/blogWhite.png')
  .default;

function BlogHome() {
  const strapiMediaUrl = useContext(AppConfigContext)['state'][
    'strapiMediaUrl'
  ];

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
                    const authorImgUrl = blogPost?.blog_author?.Image?.formats
                      ?.thumbnail?.url
                      ? strapiMediaUrl +
                        blogPost?.blog_author?.Image?.formats?.thumbnail?.url
                      : null;
                    const coverImgUrl = blogPost?.CoverImage?.formats?.thumbnail
                      ?.url
                      ? strapiMediaUrl +
                        blogPost?.CoverImage?.formats?.thumbnail?.url
                      : null;
                    return (
                      <Col xs={12} md={6} lg={4} key={blogPost?.uid}>
                        <BlogCard
                          title={blogPost?.Title}
                          description={blogPost?.SubTitle}
                          uid={blogPost?.uid}
                          date={blogPost?.published_at}
                          author={blogPost?.blog_author?.Name}
                          authImg={authorImgUrl}
                          coverImgSrc={coverImgUrl}
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
