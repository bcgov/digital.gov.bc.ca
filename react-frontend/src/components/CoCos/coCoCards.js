import React from 'react';
import CoCoCard from './coCoCard';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import COCOS_QUERY from '../../queries/coCos/coCos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { commonComponentLinks } from '../../constants/urls';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import {
  ResourcePageHeading,
  ResourcePageSubHeading,
} from '../StyleComponents/headings';
import {
  StyledP,
  HrefLinkStandalone,
  FloatParagraphRight,
  HrefLink,
} from '../StyleComponents/htmlTags';
import {
  faPlusCircle,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

const linkIcon = (
  <FontAwesomeIcon
    icon={faExternalLinkAlt}
    className="fa-xs"
    style={{ marginLeft: '0.3em' }}
  />
);

function CoCoCards() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        <Col sm={4}>
          <ResourcePageHeading>Explore</ResourcePageHeading>
        </Col>
        <Col sm={8}>
          <FloatParagraphRight>
            <HrefLinkStandalone
              href={commonComponentLinks.ccForm}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="fa-lg"
                style={{ marginRight: '0.3em' }}
              />
              Add your Common Component
              {linkIcon}
            </HrefLinkStandalone>
          </FloatParagraphRight>
        </Col>
      </Row>
      <Query query={COCOS_QUERY}>
        {({ data: { coCos } }) => {
          return (
            <Row style={{ marginBottom: '1em' }}>
              {coCos.map((coCo, i) => {
                return (
                  <Col sm={12} md={6} key={coCo.uid}>
                    <CoCoCard
                      title={coCo.Name}
                      description={coCo.ShortDescription}
                      nameAndMinistry={coCo.TeamNameAndMinistry}
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
          <ResourcePageSubHeading>
            Don't see what you are looking for?
          </ResourcePageSubHeading>
          <StyledP>
            Share your request in the &nbsp;
            <HrefLink href={commonComponentLinks.ccRCChannel}>
              Common Components Channel{linkIcon}
            </HrefLink>
            &nbsp; on Rocket.Chat (requires IDIR or GitHub account to login).
          </StyledP>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ResourcePageHeading>Support</ResourcePageHeading>
          <StyledP>
            Contact the Common Components team:{' '}
            <HrefLinkStandalone href="mailto:CITZAS@gov.bc.ca">
              CITZAS@gov.bc.ca
            </HrefLinkStandalone>
            .
          </StyledP>
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default CoCoCards;
