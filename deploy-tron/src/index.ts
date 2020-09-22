import { Application } from 'probot'; // eslint-disable-line no-unused-vars
import { handlePrComment, handlePrOpened } from './handlers';

export = (app: Application): void => {

  app.on('issue_comment.created', handlePrComment);

  app.on('pull_request.opened', handlePrOpened);
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

//
