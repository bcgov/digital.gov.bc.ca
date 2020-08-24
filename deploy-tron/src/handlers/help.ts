import { Context } from 'probot';
import { helpMessage, configurationMessage } from '../utils/messages';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const help = (context: Context): any => {
  return helpMessage(context);
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const configuration = (context: Context): any => {
  return configurationMessage(context);
};
