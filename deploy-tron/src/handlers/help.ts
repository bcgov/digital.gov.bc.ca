import { Context } from 'probot';
import { helpMessage } from '../utils/messages';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const help = (context: Context): any => {
  return helpMessage(context);
};
