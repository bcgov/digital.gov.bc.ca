import config from '../config/index.json';
import { COMMANDS, DEFAULT_SYNONYMS } from '../constants';

export interface parsedDeployCommand {
  microservice: string;
  environment: string;
}

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
): parsedDeployCommand | null => {
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

interface synonyms {
  [any: string]: string
}

export const getEnvFromSynonym = (env: string): string => {
  const synonyms: synonyms = { ...DEFAULT_SYNONYMS, ...config.environmentSynonyms };

  return synonyms[env];
}