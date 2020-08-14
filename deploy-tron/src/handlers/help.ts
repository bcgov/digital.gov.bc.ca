import { readFileSync } from 'fs';
import { Context } from 'probot';
import path from 'path';

export const help = (context: Context): any => {
  const buffer = readFileSync(path.join(__dirname, '../../content/help.md'));

  const params = context.issue({ body: buffer.toString() });
  return context.github.issues.createComment(params);
};
