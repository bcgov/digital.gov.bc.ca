import { Application } from 'probot'; // eslint-disable-line no-unused-vars
import { handlePrComment } from './handlers';

export = (app: Application): void => {

  app.on('issue_comment.created', handlePrComment);
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

//
