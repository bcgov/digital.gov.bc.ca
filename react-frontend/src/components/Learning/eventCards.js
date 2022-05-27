import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Query from '../Query';
import EVENTS_QUERY from '../../queries/learning/events';
import EventCard from './eventCard';

/**
 * Creates a unique list of events
 * 1. without SeriesUIDs
 * 2. the soonest to start of multiple events with the same SeriesUID
 * 3. events with a SeriesUID key, but empty or null value
 *
 * @param {Object} list
 * @returns {Object}
 */
function filterBySeries(list) {
  // the events are ordered by start date in EVENTS_QUERY
  // the first event mapped will be the soonest to start.
  const seriesIDs = [];
  const fliteredList = [];

  list.map((event) => {
    if (!event.SeriesUID) {
      fliteredList.push(event);
    } else if (
      seriesIDs.indexOf(event.SeriesUID) === -1 &&
      event.SeriesUID !== false
    ) {
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
