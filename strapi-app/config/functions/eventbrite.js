const axios = require('axios');

const FORMAT_ID_FOR_COURSE = 9;

//Figure out what is actually needed 
//Save fields to the content type
//Handle Errors (send admin an alert or email, post a comment in the feedback page)
//Set up tests on this logic
//Handle the multiple pages if needed (MAKE SURE IT DOESN'T BREAK OTHER STUFF) DONE MAKE IT ONLY LIVE EVENTS ONCE EVERTHING IS WORKING
//build out content type:  cover image url, title, description, link to EB

// This populates a list of live eventbrite events 
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
    console.log(`The continuation token is ${continuationToken}`)
    console.log(data.pagination)
    events.push(...data.events);

  } while (hasMoreItems)

  return events;
}



module.exports = async () => {
  //Get a list of all entries in strapi
  const savedEvents = await strapi.query('eventbrite-event').model.find({}).select({ EventID: 1 });
  const listSavedEvents = savedEvents.map(savedEvent => savedEvent["EventID"])
  console.log(listSavedEvents)

  //Get the current live events from 
  const events = await getEvents();


  console.log(`There are ${events.length} events returned`)

  //TODO
  //If an id is not found when the pull happens delete it from strapi
  events.forEach(event => {
    // If an event is part of a 


    if (!listSavedEvents.includes(event.id)) {
      console.log(`The event ID is ${event.id}`)

      //A formatid of 9 is for a course, null or 10 is not
      const isCourse = (event.format_id == FORMAT_ID_FOR_COURSE)

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
    }

  });




  strapi.log.info('The eventbrite endpoint was called');
  // console.log(data);
};
