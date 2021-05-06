import React, { useContext, useState } from 'react';

// The url returned by strapi for images does not take into account the different env
// To fix this we made a helper function to correct things
export function convertImageLink(config, url) {
  if (url) {
    const strapiURL = config['state']['strapiApiUrl'];
    return strapiURL?.replace('/graphql', url);
  }
  return null;
}
