import {Application} from 'probot'; // eslint-disable-line no-unused-vars
import {writeFileSync} from 'fs';
import path from 'path';
import parse from 'minimist';

const command = '/deploy-tron deploy react --to=prod'.replace(/ +/g, ' ').split(' ');
const command2 = '/deploy-tron deploy react to prod'.replace(/ +/g, ' ').split(' ');

export = (app: Application) => {
  app.log(parse(command));
  app.log(parse(command2));
  app.on('issue_comment.created', async (context) => {
    // app.log("FOOFOO", context.payload);
    const permissions = await context.github.repos.getCollaboratorPermissionLevel({username: 'patricksimonian', repo: 'strapi-demo', owner: 'patricksimonian'});

    writeFileSync(path.join(__dirname, './foo.json'), JSON.stringify(permissions.data, null, 2));
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
