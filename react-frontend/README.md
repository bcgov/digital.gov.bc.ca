This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run: :)

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

To get a mesure of the code coverage run:

`npm run test -- --coverage --watchAll=false`

A percentage of our tests are snapshot based.  These will fail if the styling has changed on their corresponding pages.  To update them simply run the tests locally and when prompted, type the command `u`.  Make certain all broken tests do not reflect breaking changes.

### `npm run url-test`

This runs a test to see if the urls in the react-frontend are still live.  The test file is stored with the `url.js` file in the constants folder `./src/constants/`. These tests are also triggered by a cron job to run once a month.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run cy:open`

Launches the cypress test runner in the interactive watch mode.<br />
For more information visit the page [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview).

Note: You need to run the app in a separate terminal for the tests to pass.

### `npm run cy:test`

Launches the cypress test runner in silent mode for CI/CD purpose.<br />
For more information visit the page [Cypress CLI commands](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).

This command runs the app, waits for the website to come up by continuously pinging for the localhost:3000 url and then runs the cypress tests in silent mode. The cypress run creates videos per test file in the cypress/videos folder. These videos can be used to view/debug test failures in the CI/CD environment. 

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
