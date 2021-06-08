const axios = require('axios');

module.exports = async () => {
  console.log("The token is:")
  console.log(process.env.EVENTBRITE_BEARER_TOKEN)
  const { data } = await axios.get(
    'https://www.eventbriteapi.com/v3/organizations/228490647317/events/',
    {
      headers: {
        "Authorization": `Bearer ${process.env.EVENTBRITE_BEARER_TOKEN}`,
      }
    });
  strapi.log.info('The eventbrite endpoint was called');
  console.log(data);
};
