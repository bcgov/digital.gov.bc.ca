import React from 'react';
import CoCoCard from './coCoCard';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import COCOS_QUERY from '../../queries/coCos/coCos';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageHeading } from '../StyleComponents/headings';
import { StyledP, HrefLinkStandalone } from '../StyleComponents/htmlTags';

function CoCoCards() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        <Col sm={12}>
          <ResourcePageHeading>Explore</ResourcePageHeading>
        </Col>
      </Row>
      <Query query={COCOS_QUERY}>
        {({ data: { coCos } }) => {
          return (
            <Row style={{ marginBottom: '4px' }}>
              {coCos.map((coCo, i) => {
                return (
                  <Col sm={12} md={6} key={coCo.uid}>
                    <CoCoCard
                      title={coCo.Name}
                      description={coCo.Description}
                      numberOfUsers={coCo.NumberOfUsers}
                      onboardingTime={coCo.OnboardingTime}
                      supportSchedule={coCo.SupportSchedule}
                      cost={coCo.CostStructure.Cost}
                      status={coCo.ProjectStatus}
                      tags={coCo.Tags}
                      uid={coCo.uid}
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
          <ResourcePageHeading>Support</ResourcePageHeading>
          <StyledP>
            Contact the Common Components team:{' '}
            <HrefLinkStandalone>
              Digital.Government@gov.bc.ca
            </HrefLinkStandalone>
            .
          </StyledP>
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default CoCoCards;
