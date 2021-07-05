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
          <Col sm={12}>
            <SubHeading style={{ display: 'inline-block' }}>
              Recent Episodes
            </SubHeading>
            <HrefLinkStandalone
              href="https://bcdevexchange.libsyn.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: 'right' }}
            >
              View all {' >'}
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
                      <Col xs={12} md={4} style={{ height: '200px' }}>
                        <img
                          src={strapiMediaUrl + podcast?.CoverImage?.url}
                          style={{ maxWidth: '100%', height: '100%' }}
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
                          <p style={{ marginBottom: '0' }}>
                            {podcast.EpisodeNumber
                              ? `Episode ${podcast.EpisodeNumber} `
                              : ``}
                            &#183; {dateFormat(podcast.AirDate, 'mmmm d,yyyy')}
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
