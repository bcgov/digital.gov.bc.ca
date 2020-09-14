import { Context } from 'probot';
import { architectureMessage } from '../utils/messages';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const architecture = (context: Context): any => {
  return architectureMessage(context);
};
