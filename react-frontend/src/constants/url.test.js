'use strict';

import * as exports from './urls';

const linkCheck = require('link-check');
for (const urlObject in exports) {
  for (const url in exports[urlObject]) {
    it(`Checks the url ${url} in object ${urlObject}`, async () => {
      await linkCheck(exports[urlObject][url], function (err, result) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${result.link} in object ${urlObject} is ${result.status}`);
        expect(result.status).toBe("alive")
      });
      await new Promise((resolve) => setTimeout(resolve, 4000));
    });
  }
}




