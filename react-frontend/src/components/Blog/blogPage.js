import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import dateFormat from 'dateformat';

import Query from '../Query';
import BLOG_QUERY from '../../queries/blog/blog';
import DocumentTitle from 'react-document-title';
import { AppConfigContext } from '../../providers/AppConfig';

import NotFound from '../NotFoundPage/notFoundPage';
import BlogNavigation from './blogNavigation';

import { PageContainer } from '../StyleComponents/pageContent';
import { Title } from '../StyleComponents/headings';
import { StyleRichText } from '../StyleComponents/styledMarkdown';

function BlogImage({ url }) {
  if (url) {
    return (
      <img
        src={url}
        alt="Blog"
        style={{ marginBottom: '16px', width: '100%' }}
      />
    );
  }
  return <div />;
}

function AuthorIcon({ url }) {
  if (url) {
    return (
      <img
        src={url}
        alt="avatar"
        style={{
          verticalAlign: 'middle',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
        }}
      />
    );
  }
  return <div />;
}

function BlogPage() {
  const params = useParams();
  const strapiMediaUrl =
    useContext(AppConfigContext)['state']['strapiMediaUrl'];
  return (
    <PageContainer>
      <Query query={BLOG_QUERY} uid={params.uid}>
        {({ data: { blogPosts } }) => {
          if (blogPosts.length === 0) {
            return <NotFound />;
          }
          const blog = blogPosts[0];
          const pageTitle = blog?.Title;
          return (
            <DocumentTitle
              title={
                pageTitle +
                ' - Digital Government - Province of British Columbia'
              }
            >
              <Row>
                <Col xs={10} md={8} style={{ paddingRight: '30px' }}>
                  {blog?.CoverImage?.url && (
                    <BlogImage url={strapiMediaUrl + blog?.CoverImage?.url} />
                  )}
                  <Title style={{ lineHeight: '1.2' }}>{pageTitle}</Title>
                  <p style={{ fontWeight: '700', paddingBottom: '20px' }}>
                    {blog?.SubTitle}
                  </p>
                  <p style={{ paddingBottom: '20px' }}>
                    {dateFormat(blog?.published_at, 'mmmm d, yyyy')}
                  </p>
                  <StyleRichText htmlOrMarkdown={blog?.Content} />
                </Col>
                <Col>
                  <p style={{ marginBottom: '0', fontWeight: '700' }}>
                    {blog?.blog_author?.Name}
                  </p>
                  <p style={{ marginBottom: '4px' }}>
                    {blog?.blog_author?.Title}
                  </p>
                  {blog?.blog_author?.Image?.formats?.thumbnail?.url && (
                    <AuthorIcon
                      url={
                        strapiMediaUrl +
                        blog?.blog_author?.Image?.formats?.thumbnail?.url
                      }
                    />
                  )}
                </Col>
              </Row>
            </DocumentTitle>
          );
        }}
      </Query>
      <Row>
        <BlogNavigation uid={params.uid} />
      </Row>
    </PageContainer>
  );
}

export default BlogPage;
