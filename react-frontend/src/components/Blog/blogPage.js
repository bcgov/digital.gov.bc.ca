import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import dateFormat from 'dateformat';

import Query from '../Query';
import BLOG_QUERY from '../../queries/blog/blog';
import DocumentTitle from 'react-document-title';
import { AppConfigContext } from '../../providers/AppConfig';

import NotFound from '../NotFoundPage/notFoundPage';
import { convertImageLink } from '../../helperFunctions/helpers';
import BlogNavigation from './blogNavigation'

import { HrefLink } from '../StyleComponents/htmlTags';
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
  const strapiMediaUrl = useContext(AppConfigContext)['state']['strapiMediaUrl'];

  return (
    <DocumentTitle title="Blog Page">
      <PageContainer>
        <Query query={BLOG_QUERY} uid={params.uid}>
          {({ data: { blogPosts } }) => {
            if (blogPosts.length === 0) {
              return <NotFound />;
            }
            const blog = blogPosts[0];
            console.log(blog.Content)
            return (
              <Row>
                <Col xs={10} md={8} style={{ paddingRight: '30px' }}>
                  <BlogImage url={strapiMediaUrl + blog?.CoverImage?.url} />
                  <Title style={{ lineHeight: '1.2' }}>{blog?.Title}</Title>
                  <p style={{ fontWeight: '700' }}>{blog?.SubTitle}</p>

                  <p> {dateFormat(blog?.published_at, 'mmmm d, yyyy')}</p>
                  <StyleRichText htmlOrMarkdown={blog?.Content} />
                </Col>
                <Col>
                  <p style={{ fontWeight: '700' }}>
                    {blog?.blog_author?.Name}
                  </p>
                  <p>{blog?.blog_author?.Title}</p>
                  <AuthorIcon
                    url={strapiMediaUrl +
                      blog?.blog_author?.Image?.formats?.thumbnail?.url
                    }
                  />
                </Col>
              </Row>
            );
          }}
        </Query>
        <Row>
          <BlogNavigation uid={params.uid} />
        </Row>
      </PageContainer>
    </DocumentTitle>
  );
}

export default BlogPage;
