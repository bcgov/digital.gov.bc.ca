import React, { useContext } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Query from '../Query';
import LEARNING_ADMINS_QUERY from '../../queries/learning/learningAdmins';
import { AppConfigContext } from '../../providers/AppConfig';

import { Heading } from '../StyleComponents/headings';
import {
  BannerHorizontalContainer,
  LearningSideImageTextBox,
} from '../StyleComponents/pageContent';

function ContactUs() {
  const strapiMediaUrl =
    useContext(AppConfigContext)['state']['strapiMediaUrl'];
  return (
    <BannerHorizontalContainer>
      <Query query={LEARNING_ADMINS_QUERY}>
        {({ data: { learningAdmins } }) => {
          return (
            <Row middle="xs">
              <Col xs={12} lg={6}>
                <LearningSideImageTextBox>
                  <p>
                    Is there a course you wish we offered? Got an idea for an
                    event?
                  </p>
                  <Heading>We'd love to hear from you.</Heading>
                </LearningSideImageTextBox>
              </Col>
              {learningAdmins.map((admin, i) => {
                return (
                  <Col xs={12} sm={6} lg={3} key={i}>
                    <div
                      style={{ textAlign: 'left', marginTop: '16px' }}
                      data-testid="learning-admin"
                    >
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
                          className="icon"
                          href={`mailto:${admin.Email}`}
                          style={{ float: 'right' }}
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: 'black' }}
                          />
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
