const axios = require('axios');

const FORMAT_ID_FOR_COURSE = 9;

//Handle Errors (send admin an alert or email, post a comment in the feedback page)
//Handle the multiple pages if needed (MAKE SURE IT DOESN'T BREAK OTHER STUFF) DONE MAKE IT ONLY LIVE EVENTS ONCE EVERTHING IS WORKING

// Populate a list of live eventbrite events 
async function getEvents() {
  let events = [];
  let hasMoreItems = false;
  let continuationToken = null
  do {
    // let baseURL = 'https://www.eventbriteapi.com/v3/organizations/228490647317/events'
    let baseURL = 'https://www.eventbriteapi.com/v3/organizations/228490647317/events?status=live';
    if (hasMoreItems && continuationToken) {
      baseURL = baseURL + `?continuation=${continuationToken}`;
    }
    const { data } = await axios.get(
      baseURL,
      {
        headers: {
          "Authorization": `Bearer ${process.env.EVENTBRITE_BEARER_TOKEN}`,
        }
      }).catch(err => console.log(err));

    hasMoreItems = data.pagination.has_more_items;
    continuationToken = data.pagination.continuation;
    events.push(...data.events);

  } while (hasMoreItems)

  return events;
}

module.exports = async () => {
  const {
    eventbriteCronStarted,
    eventbriteCronCompleted,
    isEventbriteCronInProgress
  } = require('../../public/PublicVariables')
  if (!isEventbriteCronInProgress()) {
    eventbriteCronStarted();
    try {

      //Get a list of all entries in strapi
      const savedEvents = await strapi.query('eventbrite-event').model.find({}).select({ EventID: 1 });
      const listSavedEvents = savedEvents.map(savedEvent => savedEvent["EventID"])
      console.log(listSavedEvents)

      //Get the current live events from eventbrite
      const events = await getEvents();
      const listEventIDs = events.map(event => event.id);

      // If the event is not in the live event list delete it from strapi
      listSavedEvents.forEach(savedEventID => {
        if (!listEventIDs.includes(savedEventID)) {
          strapi.query('eventbrite-event').delete({ EventID: savedEventID })
          console.log(`deleted event ${savedEventID}`)
        }
      })

      events.forEach(event => {
        //A format_id of 9 is for a course, null or 10 is not
        const isCourse = (event.format_id == FORMAT_ID_FOR_COURSE)

        // If an event is already stored, update it if necessary
        if (listSavedEvents.includes(event.id)) {
          // TODO:Currently this updates every time the job is run.  
          // It may be worth refactoring to check if anything has changed before updating     
          strapi
            .query('eventbrite-event')
            .update(
              { EventID: event.id },
              {
                Name: event.name.text,
                Description: event.description.text,
                Url: event.url,
                ImageUrl: event.resource_uri,
                IsCourse: isCourse,
                IsSeries: event.is_series,
                StartTime: event.start.utc,
                SeriesUID: event.series_id
              });
          console.log(`updated event ${event.id}`)
        } else {
          //If the event is not stored in strapi create a new one.
          strapi
            .query('eventbrite-event')
            .create({
              Name: event.name.text,
              Description: event.description.text,
              Url: event.url,
              ImageUrl: event.resource_uri,
              EventID: event.id,
              IsCourse: isCourse,
              IsSeries: event.is_series,
              StartTime: event.start.utc,
              SeriesUID: event.series_id
            });
          console.log(`created event ${event.id}`)
        }

      });
    } catch (err) {
      console.log(err)
    } finally {
      strapi.log.info('The eventbrite endpoint was called');
      eventbriteCronCompleted();
    }
  }
};
