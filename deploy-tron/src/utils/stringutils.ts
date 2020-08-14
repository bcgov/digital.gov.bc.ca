import config from '../config/index.json';
/**
 * attempts to extract values from command
 * @param command 
 * @param botCommand 
 * @param microservices 
 * @param environments 
 * @returns {Object} will return null if command is invalid
 */
export const extractCommandValues = (command: string): object|null => {
  const cmd = command.trim();
  const microServicesString = config.microservices.join('|');
  const environmentsString = config.environments.join('|')
  const re = new RegExp(`^${config.botCommand} deploy (${microServicesString}) to (${environmentsString})$`);
  console.log(re);
  // if the command does not match the pattern return null
  if(!re.test(cmd)) return null;

  const tokens = cmd.split(' ');
  console.log(tokens, command)
  return {
    microservice: tokens[2],
    environment: tokens[4]
  }
} 