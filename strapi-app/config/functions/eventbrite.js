const axios = require('axios');

const FORMAT_ID_FOR_COURSE = 9;

// Populate a list of live eventbrite events 
async function getEvents() {
  let events = [];
  let hasMoreItems = false;

  let continuationToken = null
  do {
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
  try {
    //Get the current live events from eventbrite
    const events = await getEvents();
    const listEventIDs = events.map(event => event.id);

    //Get a list of all entries in strapi
    const savedEvents = await strapi.query('eventbrite-event').model.find({}).select({ EventID: 1, updatedAt: 1 });
    const listSavedEvents = savedEvents.map(savedEvent => savedEvent["EventID"])

    const aMinuteAgo = new Date(Date.now() - 1000 * 60);

    // If the event is not in the live event list delete it from strapi
    listSavedEvents.forEach(savedEventID => {
      if (!listEventIDs.includes(savedEventID)) {
        strapi.query('eventbrite-event').delete({ EventID: savedEventID })
      }
    })

    events.forEach(event => {
      //A format_id of 9 is for a course, null or 10 is not
      const isCourse = (event.format_id == FORMAT_ID_FOR_COURSE)

      // If an event is already stored in strapi, update it if necessary
      if (listSavedEvents.includes(event.id)) {
        const eventUpdatedAt = savedEvents.filter(obj => {
          return obj.EventID === event.id
        })[0]['updatedAt']
        // TODO:Currently this updates every time the job is run.  
        // It may be worth refactoring to check if anything has changed before updating
        // TODO: Move the cron job out of the strapi app and into an openshift cron.
        // This checks if the event was not updated in the past minute.  If it has, that means the 
        // cron job ran twice and the update should be ignored.
        if (eventUpdatedAt < aMinuteAgo) {
          strapi
            .query('eventbrite-event')
            .update(
              { EventID: event.id },
              {
                Name: event.name.text,
                Description: event.description.text,
                Url: event.url,
                ImageUrl: event.logo.url,
                IsCourse: isCourse,
                IsSeries: event.is_series,
                StartTime: event.start.utc,
                SeriesUID: event.series_id
              });
        }
      } else {
        //If the event is not stored in strapi create it.
        strapi
          .query('eventbrite-event')
          .create({
            Name: event.name.text,
            Description: event.description.text,
            Url: event.url,
            ImageUrl: event.logo.url,
            EventID: event.id,
            IsCourse: isCourse,
            IsSeries: event.is_series,
            StartTime: event.start.utc,
            SeriesUID: event.series_id
          }).catch(e => {
            if (e.code == 11000) {
              strapi.log.info("The event has already been uploaded.")
            } else {
              strapi.log.info(err)
            }
          });
      }

    });
  } catch (err) {
    strapi.log.info(err)
  }
};
