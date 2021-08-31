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
  assemblingLinks,
} from './urls';

const linkCheck = require('link-check');

for (const url in assemblingLinks) {
  it(`Checks the url ${url}`, async () => {
    await linkCheck(assemblingLinks[url], function (err, result) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${result.link} is ${result.status}`);
      expect(result.status).toBe('alive');
    });
    await new Promise((resolve) => setTimeout(resolve, 4000));
  });
}
