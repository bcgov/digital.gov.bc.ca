import { readFileSync } from 'fs';
import { Context } from 'probot';
import path from 'path';
import { createComment } from '../utils/ghutils';

export const help = (context: Context): any => {
  const buffer = readFileSync(path.join(__dirname, '../../content/help.md'));
  
  return createComment(context, buffer.toString());
};
