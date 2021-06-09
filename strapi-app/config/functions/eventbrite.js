const axios = require('axios');

//Figure out what is actually needed 
//Save fields to the content type
//Handle Errors (send admin an alert or email)
//Set up tests on this logic
//Handle the multiple pages if needed
//build out content type:  cover image url, title, description, link to EB

module.exports = async () => {
  const { data } = await axios.get(
    'https://www.eventbriteapi.com/v3/organizations/228490647317/events?status=live',
    {
      headers: {
        "Authorization": `Bearer ${process.env.EVENTBRITE_BEARER_TOKEN}`,
      }
    });

  data.events.forEach(event => {
    // Handle series
    console.log("A series")
    console.log(event.is_series)

    // if (event.is_series) {
    //   console.log("A series")
    // } else {
    //   console.log("Not a series")
    // }
    // Handle non series
  });



  strapi.log.info('The eventbrite endpoint was called');
  // console.log(data);
};
