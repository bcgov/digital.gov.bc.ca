import React from 'react';
import CoCoCard from './coCoCard';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import COCOS_QUERY from '../../queries/coCos/coCos';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageHeading } from '../StyleComponents/headings';
import { StyledP, HrefLinkStandalone } from '../StyleComponents/htmlTags';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'See how we are working in the open on the next IM/IT Policy Framework.',
];

const linkTexts = ['Read the principles', 'View the alpha version on GitHub'];

const links = [
  '/resources/digital-principles',
  'https://github.com/bcgov/digital-policy',
];

function CoCoCards() {
  return (
    <ContentBlockContainer id="standards">
      <Query query={COCOS_QUERY}>
        {({ data: { coCos } }) => {
          return (
            <Row>
              {coCos.map((coCo, i) => {
                console.log(coCo.Tags);
                return (
                  <Col sm={12} md={6} key={coCo.uid}>
                    <CoCoCard
                      title={coCo.Name}
                      description={coCo.Description}
                      // maintenanceStatus={coCo.ProjectStatus.Maintenance}
                      numberOfUsers={coCo.NumberOfUsers}
                      onboardingTime={coCo.OnboardingTime}
                      supportSchedule={coCo.SupportSchedule}
                      cost={coCo.CostStructure.Cost}
                      status={coCo.ProjectStatus}
                      tags={coCo.Tags}
                    />
                  </Col>
                );
              })}
            </Row>
          );
        }}
      </Query>
      <Row>
        <Col sm={12}>
          <ResourcePageHeading>Explore</ResourcePageHeading>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <CoCoCard
            title={'Digital Principles'}
            description={descriptions[1]}
            linkText={linkTexts[0]}
            routePath={links[0]}
            height="300px"
          />
        </Col>
        <Col sm={12} md={6}>
          <CoCoCard
            title={'IM/IT Policy Framework'}
            description={descriptions[2]}
            linkText={linkTexts[1]}
            linkPath={links[1]}
            height="300px"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ResourcePageHeading>Support</ResourcePageHeading>
          <StyledP>
            Contact the Common Components team:
            <HrefLinkStandalone>
              CommonComponents@gov.bc.ca
            </HrefLinkStandalone>{' '}
            or <HrefLinkStandalone>250-777-7777</HrefLinkStandalone>
          </StyledP>
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default CoCoCards;
