import { Application } from 'probot' // eslint-disable-line no-unused-vars
import { writeFileSync } from 'fs'
import path from 'path'
export = (app: Application) => {
  app.on('issue_comment.created', async (context) => {
    // app.log("FOOFOO", context.payload);
    writeFileSync(path.join(__dirname, './issue_comment.json'), JSON.stringify(context, null, 2))
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
