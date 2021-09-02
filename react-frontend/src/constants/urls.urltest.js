import * as exports from './urls';

const linkCheck = require('link-check');

//some urls are behind a password and will fail the test despite being valid
const exclusionList = {
  openSchools: 'https://www.openschool.bc.ca/keeplearning/',
  iStore: 'https://ssbc-client.gov.bc.ca/order/istore.htm',
};

for (const urlObject in exports) {
  for (const url in exports[urlObject]) {
    if (!(url in exclusionList)) {
      it(`Checks the url ${url} in object ${urlObject}`, async () => {
        await linkCheck(exports[urlObject][url], function (err, result) {
          if (err) {
            console.error(err);
            return;
          }
          // console.log(
          //   `${result.link} in object ${urlObject} is ${result.status}`
          // );
          expect(result.status).toBe('alive');
        });
        await new Promise((resolve) => setTimeout(resolve, 4000));
      });
    }
  }
}
