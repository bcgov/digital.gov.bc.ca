import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';

import Query from '../Query';
import COMMUNITY_QUERY from '../../queries/community/community';
import DocumentTitle from 'react-document-title';

import NotFound from '../NotFoundPage/notFoundPage';

import { HrefLink } from '../StyleComponents/htmlTags';
import { PageContainer } from '../StyleComponents/pageContent';
import { Title, Heading } from '../StyleComponents/headings';
import { ReactMarkdownStyled } from '../StyleComponents/styledMarkdown';
function CoCoPage() {
  const params = useParams();

  return (
    <DocumentTitle title="Community Page">
      <PageContainer>
        <Query query={COMMUNITY_QUERY} uid={params.uid}>
          {({ data: { communityPages } }) => {
            if (communityPages.length === 0) {
              return <NotFound />;
            }
            const communityPage = communityPages[0];

            console.log(communityPages);
            return (
              <Row>
                <Col xs={12} md={8}>
                  <Title>{communityPage?.Title}</Title>
                  <p>{communityPage?.Description}</p>
                  <Heading>Who we are</Heading>
                  <p>{communityPage?.WhoWeAre}</p>
                  {/* TODO: ADD THE IMAGE */}
                  <Heading>What we do</Heading>
                  <p>{communityPage?.WhatWeDo}</p>
                  <Heading>How to participate</Heading>
                  <ReactMarkdownStyled
                    source={communityPage?.HowToParticipate}
                  />
                  {communityPage?.KeyResources && (
                    <div>
                      <Heading>Key resources</Heading>
                      <ReactMarkdownStyled
                        source={communityPage?.KeyResources}
                      />
                    </div>
                  )}
                </Col>
                <Col xs={12} md={4}>
                  <Heading>Community Managers</Heading>
                  <div>
                    {communityPage?.CommunityEmail?.map((email, i) => {
                      return (
                        <p key={i} style={{ margin: '0' }}>
                          <HrefLink href={`mailto:${email.Email}`}>
                            {email.Name}
                          </HrefLink>
                        </p>
                      );
                    })}
                  </div>
                  {/* TODO: ONLY RENDER IF THE LINKS ARE ENTERED */}
                  {/* TODO ADD THE FANCY ICONS */}
                  <Heading>Links</Heading>
                  <div>
                    {communityPage?.ExternalLink?.map((link, i) => {
                      return (
                        <p key={i} style={{ margin: '0' }}>
                          <HrefLink href={link.Url}>
                            {link.WebsiteName}
                          </HrefLink>
                        </p>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            );
          }}
        </Query>
      </PageContainer>
    </DocumentTitle>
  );
}

export default CoCoPage;
