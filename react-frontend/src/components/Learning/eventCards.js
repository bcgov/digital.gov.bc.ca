import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import EVENTS_QUERY from '../../queries/learning/events';
import EventCard from './eventCard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import { StyledP, HrefLinkStandalone } from '../StyleComponents/htmlTags';

function filterBySeries(list) {
  //the events are ordered by start date in the events query
  //the first event mapped will be the soonest to start.
  const seriesIDs = [];
  const fliteredList = [];
  list.map((event) => {
    if (!event.SeriesUID) {
      fliteredList.push(event);
    }
    if (seriesIDs.indexOf(event.SeriesUID) == -1) {
      seriesIDs.push(event.SeriesUID);
      fliteredList.push(event);
    }
  });
  return fliteredList;
}

function EventCards({ isCourse }) {
  return (
    <Query query={EVENTS_QUERY} isClass={isCourse}>
      {({ data: { eventbriteEvents } }) => {
        const filteredEvents = filterBySeries(eventbriteEvents);
        return (
          <Row style={{ marginBottom: '4px' }}>
            {filteredEvents.map((event, i) => {
              return (
                <Col sm={12} md={4} key={event.EventID}>
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
