'use strict';

import {
  videoLinks,
  standardsUrls,
  resourceLinks,
  podcastUrls,
  hostingOptionUrls,
  footerLinks,
  digitalCardLinks,
  digitalPrincipleUrls,
  developerLinks,
  designersUrls,
  definingLinks,
  consideringLinks,
  collabResources,
  collabToolUrls,
  assemblingLinks
} from './urls'

const linkCheck = require('link-check');



it('Checks a link', () => {

  linkCheck(assemblingLinks.exchangeLab, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${result.link} is ${result.status}`);
  });

});