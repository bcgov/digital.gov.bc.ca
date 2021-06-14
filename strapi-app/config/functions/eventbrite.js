const axios = require('axios');

//Figure out what is actually needed 
//Save fields to the content type
//Handle Errors (send admin an alert or email)
//Set up tests on this logic
//Handle the multiple pages if needed (MAKE SURE IT DOESN'T BREAK OTHER STUFF)
//build out content type:  cover image url, title, description, link to EB

async function getEvents() {


  let events = [];
  let hasMoreItems = false;
  let continuationToken = null

  do {
    let baseURL = 'https://www.eventbriteapi.com/v3/organizations/228490647317/events'
    // 'https://www.eventbriteapi.com/v3/organizations/228490647317/events?status=live',
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
  console.log("The existing events are")
  console.log(savedEvents)
  console.log(listSavedEvents)

  const events = await getEvents();


  console.log(`There are ${events.length} events returned`)

  //TODO
  //If an id is not found when the pull happens delete it from strapi

  // data.events.forEach(event => {
  //   // Handle series
  //   console.log("A series")
  //   console.log(event.is_series)

  //   await strapi.query('eventbrite-event').create({
  //     date: new Date(),
  //     count: data.pull_count,
  //   });
  //   // if (event.is_series) {
  //   //   console.log("A series")
  //   // } else {
  //   //   console.log("Not a series")
  //   // }
  //   // Handle non series
  // });



  strapi.log.info('The eventbrite endpoint was called');
  // console.log(data);
};
