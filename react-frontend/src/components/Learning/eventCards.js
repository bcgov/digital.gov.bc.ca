import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import EVENTS_QUERY from '../../queries/learning/events';
import EventCard from './eventCard';

// Only display one card per series.
function filterBySeries(list) {
  // the events are ordered by start date in the events query
  // the first event mapped will be the soonest to start.
  const seriesIDs = [];
  const fliteredList = [];
  list.map((event) => {
    if (!event.SeriesUID) {
      fliteredList.push(event);
    }
    // create a separate array with the SeriesUID as index to avoid duplicates
    if (seriesIDs.indexOf(event.SeriesUID) === -1 && event.SeriesUID != false) {
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
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  key={event.EventID}
                  style={{ marginBottom: '20px' }}
                >
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
