import React, { useContext } from 'react';
import dateFormat from 'dateformat';
import { Col, Row } from 'react-flexbox-grid';
import { PageContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import Query from '../Query';
import { LinkExternalButton } from '../StyleComponents/htmlTags';

import LIVESTREAM_QUERY from '../../queries/digitalBCLivestream/livestreams';
import { AppConfigContext } from '../../providers/AppConfig';
const youTubeLogo = require('../../images/icons/yt_logo_rgb_light.png').default;

const BCLivestream = () => {
  const strapiMediaUrl =
    useContext(AppConfigContext)['state']['strapiMediaUrl'];

    const subscriptionLink = 
      <>
        <Heading style={{ lineHeight: '1.2' }}>
          #DigitalBC Livestream
        </Heading>
        <LinkExternalButton
          href="https://eepurl.us3.list-manage.com/subscribe?u=2cd8863adab4f39ade7cbee34&id=b331c22b50"
          style={{
            maxWidth: '160px',
            marginBottom: '0px',
            display: 'block'
          }}
          target="_blank"
        >
          Subscribe
        </LinkExternalButton>
      </>;

      const pastBroadcastLink = 
        <div style={{ width: 'fit-content' }}>
          <a
            href="https://www.youtube.com/playlist?list=PL9CV_8JBQHiqpIJZd7V4stSAwo4jxfJ9b"
            target="_blank"
            rel="noreferrer"
          >
            <p style={{ marginBottom: '4px' }}>Watch past broadcasts on</p>
            <img
              alt="YouTube"
              src={youTubeLogo}
              style={{ height: '20px', width: '80px' }}
            />
          </a>
        </div>;

    return (
      <div style={{ backgroundColor: '#fff' }}>
        {/* <PageContainer
          style={{
            backgroundColor: '#fff',
            paddingBottom: '40px',
            paddingTop: '40px',
          }}
        >
          <Row center="xs">
            <Col xs={12} style={{ textAlign: 'center' }}> */}
              {subscriptionLink}
              <div style={{ marginTop: '16px' }}>{pastBroadcastLink}</div>
            {/* </Col>
          </Row>
        </PageContainer> */}
      </div>
    );

  // return (
    


  //   <Query query={LIVESTREAM_QUERY}>
  //     {({ data: { digitalLivestreamContact, digitalBcLivestreams } }) => {
  //       const imageSource =
  //         strapiMediaUrl + digitalBcLivestreams[0]?.EventImage?.url;
  //       // if no next event is provided in strapi, this section will not render
  //       const now = new Date();
  //       const nextEventTime = new Date(digitalBcLivestreams[0]?.BroadcastTime);

  //       {
  //         /* Only render if link provided */
  //       }
  //       const pastBroadcastLink = digitalLivestreamContact?.PastEpisodeURL && (
  //         <div style={{ width: 'fit-content'}}>
  //           <a
  //             href={digitalLivestreamContact?.PastEpisodeURL}
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             <p style={{ marginBottom: '4px' }}>Watch past broadcasts on</p>
  //             <img
  //               alt="YouTube"
  //               src={youTubeLogo}
  //               style={{ height: '20px', width: '80px' }}
  //             />
  //           </a>
  //         </div>
  //       );

  //       const subscriptionLink = digitalLivestreamContact?.SubscriptionURL && (
  //         <>
  //           <Heading style={{ lineHeight: '1.2' }}>
  //             #DigitalBC Livestream
  //           </Heading>
  //           <LinkExternalButton
  //             href={digitalLivestreamContact?.SubscriptionURL}
  //             style={{
  //               maxWidth: '160px',
  //               marginBottom: '0px',
  //               display: 'block'
  //             }}
  //             target="_blank"
  //           >
  //             Subscribe
  //           </LinkExternalButton>
  //         </>
  //       );

  //       if (nextEventTime && nextEventTime > now) {
  //         return (
  //           <div style={{ backgroundColor: '#fff' }}>
  //             <PageContainer
  //               style={{
  //                 backgroundColor: '#fff',
  //                 paddingBottom: '40px',
  //                 paddingTop: '40px',
  //               }}
  //             >
  //               <Row
  //                 between="xs"
  //                 style={{ display: 'flex', alignItems: 'center' }}
  //               >
  //                 <Col
  //                   sm={12}
  //                   md={6}
  //                   style={{
  //                     display: 'flex',
  //                     flexDirection: 'column',
  //                     textAlign: 'center',
  //                     paddingBottom: '20px',
  //                   }}
  //                 >
  //                   {subscriptionLink}
  //                   {pastBroadcastLink}
  //                 </Col>
  //                 <Col sm={12} md={6} style={{ textAlign: 'center' }}>
  //                   <img
  //                     src={imageSource}
  //                     style={{
  //                       borderRadius: '4px',
  //                       width: '100%',
  //                       marginBottom: '16px',
  //                     }}
  //                   />
  //                   <p style={{ marginBottom: '0' }}>
  //                     <b>Next broadcast</b>
  //                   </p>
  //                   <b
  //                     style={{
  //                       borderRadius: '3px',
  //                       fontSize: '13px',
  //                       padding: '0 4px',
  //                       width: 'fit-content',
  //                       marginBottom: '8px',
  //                       backgroundColor: '#F2F2F2',
  //                     }}
  //                   >
  //                     {dateFormat(
  //                       digitalBcLivestreams[0]?.BroadcastTime,
  //                       'ddd, mmm d - hh:MM TT'
  //                     ) + ' PST'}
  //                   </b>

  //                   <p style={{ marginBottom: '0', padding: '8px 0 0' }}>
  //                     {digitalBcLivestreams[0]?.Description}
  //                   </p>
  //                 </Col>
  //               </Row>
  //             </PageContainer>
  //           </div>
  //         );
  //       }
  //       return (
  //         <div style={{ backgroundColor: '#fff' }}>
  //           {/* <PageContainer
  //             style={{
  //               backgroundColor: '#fff',
  //               paddingBottom: '40px',
  //               paddingTop: '40px',
  //             }}
  //           >
  //             <Row center="xs">
  //               <Col xs={12} style={{ textAlign: 'center' }}> */}
  //                 {subscriptionLink}
  //                 <div style={{ marginTop: '16px' }}>{pastBroadcastLink}</div>
  //               {/* </Col>
  //             </Row>
  //           </PageContainer> */}
  //         </div>
  //       );
  //     }}
  //   </Query>
  // );
};

export default BCLivestream;
