import React, { useContext } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import dateFormat from 'dateformat';

import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import PodcastBanner from './podcastBanner';
import PodcastCollapsedMenu from './podcastCollapsedMenu';

import Query from '../Query';
import PODCASTS_QUERY from '../../queries/learning/podcasts';
import { AppConfigContext } from '../../providers/AppConfig';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { SubHeading, SubSubHeading } from '../StyleComponents/headings';
import { HrefLinkStandalone } from '../StyleComponents/htmlTags';

const podcastImage = require('../../images/pngIllustrations/podcastGray.png')
  .default;

function Podcast() {
  const strapiMediaUrl = useContext(AppConfigContext)['state'][
    'strapiMediaUrl'
  ];
  return (
    <div>
      <PodcastBanner />
      <ContentBlockContainer id="courses">
        <Row>
          <Col
            style={{
              alignItems: 'baseline',
              display: 'flex',
              marginBottom: '16px',
              justifyContent: 'space-between',
            }}
            sm={12}
          >
            <SubHeading style={{ marginBottom: '0' }}>
              Recent Episodes
            </SubHeading>
            <HrefLinkStandalone
              href="https://bcdevexchange.libsyn.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: '0' }}
            >
              View all
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ paddingLeft: '5px' }}
              />
            </HrefLinkStandalone>
          </Col>
        </Row>
        {/* PODCASTS_QUERY returns the 3 most recent episodes in Strapi  */}
        <Query query={PODCASTS_QUERY}>
          {({ data: { podcasts } }) => {
            return (
              <div>
                {podcasts.map((podcast, i) => {
                  return (
                    <Row style={{ marginBottom: '16px' }} key={i}>
                      <Col xs={12} md={4}>
                        <img
                          src={strapiMediaUrl + podcast?.CoverImage?.url}
                          style={{
                            width: '100%',
                            maxHeight: '200px',
                            maxWidth: '300px',
                            objectFit: 'cover',
                          }}
                        />
                      </Col>
                      <Col xs={12} md={8}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                          }}
                        >
                          <p
                            style={{
                              color: '#606060',
                              fontSize: '13px',
                              marginBottom: '4px',
                            }}
                          >
                            {podcast.EpisodeNumber
                              ? `Episode ${podcast.EpisodeNumber} `
                              : ``}
                            &#183; {dateFormat(podcast.AirDate, 'mmmm d, yyyy')}
                          </p>
                          <SubSubHeading>{podcast.Title}</SubSubHeading>
                          <p>{podcast.Description}</p>
                          <HrefLinkStandalone
                            href={podcast.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginTop: 'auto' }}
                          >
                            Listen on Libsyn
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              style={{ paddingLeft: '5px' }}
                            />
                          </HrefLinkStandalone>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            );
          }}
        </Query>
        <PodcastCollapsedMenu />
      </ContentBlockContainer>
    </div>
  );
}

export default Podcast;
