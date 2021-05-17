import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';

import Query from '../Query';
import COMMUNITY_QUERY from '../../queries/community/community';
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

function CommunityImage({ url }) {
  const strapiMediaUrl = useContext(AppConfigContext)['state'][
    'strapiMediaUrl'
  ];
  if (url) {
    const imageSource = strapiMediaUrl + url;
    return (
      <img
        src={imageSource}
        alt="Community"
        style={{ marginBottom: '16px', width: '100%' }}
      />
    );
  }
  return <div />;
}

function Community() {
  const params = useParams();
  return (
    <PageContainer>
      <Query query={COMMUNITY_QUERY} uid={params.uid}>
        {({ data: { communityPages } }) => {
          if (communityPages.length === 0) {
            return <NotFound />;
          }
          const communityPage = communityPages[0];
          const communityTitle = communityPage?.Title;
          return (
            <DocumentTitle title={communityTitle}>
              <Row>
                <Col xs={12} md={8} style={{ paddingRight: '30px' }}>
                  <Title style={{ lineHeight: '1.2' }}>{communityTitle}</Title>
                  <p>{communityPage?.Description}</p>
                  <Heading>Who we are</Heading>
                  <p>{communityPage?.WhoWeAre}</p>
                  <CommunityImage url={communityPage?.CommunityImage?.url} />
                  <Heading>What we do</Heading>
                  <p>{communityPage?.WhatWeDo}</p>
                  <Heading>How to participate</Heading>
                  <StyleRichText
                    htmlOrMarkdown={communityPage?.HowToParticipate}
                  />
                  {communityPage?.KeyResources && (
                    <div>
                      <Heading>Key resources</Heading>
                      <StyleRichText
                        htmlOrMarkdown={communityPage?.KeyResources}
                      />
                    </div>
                  )}
                </Col>
                <Col xs={12} md={4}>
                  <Heading style={{ fontSize: '22px' }}>
                    Community Managers
                  </Heading>
                  <div>
                    {communityPage?.CommunityEmail?.map((email, i) => {
                      return (
                        <p key={i}>
                          <HrefLink href={`mailto:${email.Email}`}>
                            {email.Name}
                          </HrefLink>
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <Heading style={{ fontSize: '22px' }}>Links</Heading>
                    <LinkWithIcon
                      url={communityPage?.RocketChatLink}
                      text="RocketChat"
                      icon={rocketChat}
                    />
                    <LinkWithIcon
                      url={communityPage?.YammerLink}
                      text="Yammer"
                      icon={yammer}
                    />
                    <LinkWithIcon
                      url={communityPage?.AtWorkLink}
                      text="@Work"
                      icon={atSymbol}
                    />
                    <LinkWithIcon
                      url={communityPage?.MSTeamsLink}
                      text="MS Teams"
                      icon={MSTeams}
                    />
                    <LinkWithIcon
                      url={communityPage?.Website}
                      text="Website"
                      icon={websiteLogo}
                    />
                  </div>
                </Col>
              </Row>
            </DocumentTitle>
          );
        }}
      </Query>
    </PageContainer>
  );
}

export default Community;
