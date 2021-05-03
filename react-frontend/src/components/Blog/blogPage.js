import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';

import Query from '../Query';
import BLOG_QUERY from '../../queries/blog/blog';
import DocumentTitle from 'react-document-title';
import { AppConfigContext } from '../../providers/AppConfig';

import NotFound from '../NotFoundPage/notFoundPage';

import { HrefLink } from '../StyleComponents/htmlTags';
import { PageContainer } from '../StyleComponents/pageContent';
import { Title, Heading } from '../StyleComponents/headings';
import { StyleRichText } from '../StyleComponents/styledMarkdown';

const rocketChat = require('../../images/icons/rocketChat.png').default;
const MSTeams = require('../../images/icons/MSTeams-Logo.png').default;
const yammer = require('../../images/icons/Yammer-Logo.png').default;
const websiteLogo = require('../../images/icons/website1.png').default;
const atSymbol = require('../../images/icons/at-solid.png').default;

function LinkWithIcon({ icon, text, url }) {
  if (url) {
    return (
      <p>
        <img src={icon} style={{ height: '24px' }} alt="icon" />{' '}
        <HrefLink href={url}>{text}</HrefLink>
      </p>
    );
  }
  return <div />;
}

function BlogImage({ url }) {
  const config = useContext(AppConfigContext);
  const strapiURL = config['state']['strapiApiUrl'];
  if (url) {
    const imageSource = strapiURL?.replace('/graphql', url);
    return (
      <img
        src={imageSource}
        alt="Blog"
        style={{ marginBottom: '16px', width: '100%' }}
      />
    );
  }
  return <div />;
}

function BlogPage() {
  const params = useParams();
  return (
    <DocumentTitle title="Blog Page">
      <PageContainer>
        <Query query={BLOG_QUERY} uid={params.uid}>
          {({ data: { blogPosts } }) => {
            if (blogPosts.length === 0) {
              return <NotFound />;
            }
            const blog = blogPosts[0];

            return (
              <Row>
                <Col xs={12} md={8} style={{ paddingRight: '30px' }}>
                  <Title style={{ lineHeight: '1.2' }}>{blog?.Title}</Title>
                  <p>{blog?.SubTilte}</p>
                  <BlogImage url={blog?.CoverImage?.url} />
                </Col>
              </Row>
            );
          }}
        </Query>
      </PageContainer>
    </DocumentTitle>
  );
}

export default BlogPage;
