The action `Broken Link Check` triggers the test script `npm run url-test` against the frontend codebase. All ulrs in the front end should be stored in the constants file `react-frontend/src/constants/urls.js` with a test suite `react-frontend/src/constants/urls.urltest.js`.  

The Broken link Check is triggered by a cron job once a month and checks for urls that do not return 200. If one fails a GitHub issue is created and assigned to the lead dev on the project.

It should be fully automated, though it may be wise to check the GitHub action logs ocasionally and insure they have been running each month.
