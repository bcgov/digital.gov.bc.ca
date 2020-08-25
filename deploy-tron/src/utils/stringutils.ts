import { CONFIG as config } from '../constants';
import { COMMANDS, DEFAULT_SYNONYMS, ENVIRONMENTS } from '../constants';
import type { ParsedDeployCommand, PrStatusMessage } from '../constants/types';
import { getRepoAndOwnerFromContext } from './ghutils';
import { Context } from 'probot';

/**
 * returns the command from the comment
 * @param comment
 * @returns {String}
 */
export const getCommandFromComment = (comment: string): string => {
  return comment.replace(config.botCommand, '').trim().split(' ')[0];
};

export const isCommandValid = (command: string): boolean =>
  Object.hasOwnProperty.call(COMMANDS, command);

/**
 * attempts to extract values from command
 * @param command
 * @returns {Object} will return null if command is invalid
 */
export const extractDeployCommandValues = (
  command: string,
): ParsedDeployCommand | null => {
  const cmd = command.trim();
  const microServicesString = config.microservices.join('|');
  const environmentsString = config.environments.concat(Object.keys(config.environmentSynonyms)).join('|');
  const re = new RegExp(
    `^${config.botCommand} deploy (${microServicesString}) to (${environmentsString})$`,
  );

  // if the command does not match the pattern return null
  if (!re.test(cmd)) return null;

  const tokens = cmd.split(' ');

  return {
    microservice: tokens[2],
    environment: tokens[4],
  };
};



export const getEnvFromSynonym = (env: string): string => {
  const synonyms: { [any: string]: string} = { ...DEFAULT_SYNONYMS,  ...ENVIRONMENTS, ...config.environmentSynonyms };

  return synonyms[env];
};



export const formlatestStatusTable = (context: Context, statuses: PrStatusMessage[]): string => {
  const { repo, owner } = getRepoAndOwnerFromContext(context);
  const head = `
  | pr   | state | branch |
  | ---- | ----  | ---- |`;
  const body = 
    statuses.map(status => `
    | [#${status.pr}](https://github.com/${owner}/${repo}/pull/${status.pr}) | ${status.state} | ${status.branch} |
    `).join('\n');
  return head.concat(body);
};
