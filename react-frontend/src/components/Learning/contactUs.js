import React, { useContext } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Query from '../Query';
import LEARNING_ADMINS_QUERY from '../../queries/learning/learningAdmins';
import { AppConfigContext } from '../../providers/AppConfig';

import { BannerSideImgText } from '../StyleComponents/bannerWithImage';
import { Heading } from '../StyleComponents/headings';
import { BannerHorizontalContainer } from '../StyleComponents/pageContent';

function ContactUs() {
  const strapiMediaUrl = useContext(AppConfigContext)['state'][
    'strapiMediaUrl'
  ];
  return (
    <BannerHorizontalContainer>
      <Query query={LEARNING_ADMINS_QUERY}>
        {({ data: { learningAdmins } }) => {
          return (
            <Row middle="xs">
              <Col xs={12} lg={6}>
                <BannerSideImgText>
                  <p>
                    Is there a course you wish we offered? Got an idea for an
                    event?
                  </p>
                  <Heading>We'd love to hear from you.</Heading>
                </BannerSideImgText>
              </Col>
              {learningAdmins.map((admin, i) => {
                return (
                  <Col xs={12} sm={6} lg={3} key={i}>
                    <div style={{ textAlign: 'left', marginTop: '16px' }}>
                      <img
                        src={strapiMediaUrl + admin?.HeadShot?.url}
                        style={{
                          width: '100%',
                          borderRadius: '18px',
                          maxWidth: '300px',
                        }}
                      />
                      <p style={{ marginBottom: '0', maxWidth: '300px' }}>
                        <b>{admin.Name}</b>
                        <a
                          class="icon"
                          href={`mailto:${admin.Email}`}
                          style={{ float: 'right' }}
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: 'black' }}
                          />
                          {/* <i class='fa fa-envelope' alt='Send an email to"+Model.Name+"'></i> */}
                        </a>
                      </p>
                      <p style={{ marginBottom: '0' }}>{admin.Role},</p>
                      <p style={{ marginBottom: '0' }}>{admin.Office}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          );
        }}
      </Query>
    </BannerHorizontalContainer>
  );
}

export default ContactUs;
