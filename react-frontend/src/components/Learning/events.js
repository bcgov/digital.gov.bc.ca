import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import EVENTS_QUERY from '../../queries/eventbrite/events';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import { StyledP, HrefLinkStandalone } from '../StyleComponents/htmlTags';

function Events() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        <Col sm={12}>
          <Heading>Courses</Heading>
        </Col>
      </Row>
      <Query query={EVENTS_QUERY}>
        {({ data: { eventbriteEvents } }) => {
          console.log(eventbriteEvents);
          return (
            <Row style={{ marginBottom: '4px' }}>
              {/* {eventbriteEvents.map((event, i) => {
                console.log(event)
                return (
                  // <Col sm={12} md={6} key={coCo.uid}>
                  //   <CoCoCard
                  //     title={coCo.Name}
                  //     description={coCo.ShortDescription}
                  //     nameAndMinistry={coCo.TeamNameAndMinistry}
                  //     numberOfUsers={coCo.NumberOfUsers}
                  //     onboardingTime={coCo.OnboardingTime}
                  //     supportSchedule={coCo.SupportSchedule}
                  //     cost={coCo.CostStructure.Cost}
                  //     status={coCo.ProjectStatus}
                  //     tags={coCo.Tags}
                  //     uid={coCo.uid}
                  //   />
                  // </Col>
                );
              })} */}
            </Row>
          );
        }}
      </Query>
    </ContentBlockContainer>
  );
}

export default Events;
