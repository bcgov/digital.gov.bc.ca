import { readFileSync } from 'fs';
import { Context } from 'probot';
import path from 'path';
import { createComment } from '../utils/ghutils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const help = (context: Context): any => {
  const buffer = readFileSync(path.join(__dirname, '../../content/help.md'));
  
  return createComment(context, buffer.toString());
};
