import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import EVENTS_QUERY from '../../queries/eventbrite/events';
import EventCard from './eventCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import { StyledP, HrefLinkStandalone } from '../StyleComponents/htmlTags';

function EventCards({ isCourse }) {
  return (
    <Query query={EVENTS_QUERY} isClass={isCourse}>
      {({ data: { eventbriteEvents } }) => {
        console.log(eventbriteEvents);
        return (
          <Row style={{ marginBottom: '4px' }}>
            {eventbriteEvents.map((event, i) => {
              console.log(event);
              return (
                <Col sm={12} md={6} key={event.EventID}>
                  <EventCard
                    name={event?.Name}
                    description={event?.Description}
                    eventbriteUrl={event?.Url}
                    coverImgSrc={event?.ImageUrl}
                  />
                </Col>
              );
            })}
          </Row>
        );
      }}
    </Query>
  );
}

export default EventCards;
