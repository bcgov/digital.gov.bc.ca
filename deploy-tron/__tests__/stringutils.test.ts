import {
  getCommandFromComment,
  extractDeployCommandValues,
} from '../src/utils/stringutils';
import config from '../__fixtures__/config.json';

describe('String Utilities', () => {
  test('returns null if command is invalid', () => {
    expect(extractDeployCommandValues('/bot build react to uat')).toBe(null);
    expect(extractDeployCommandValues('/bot deploy react to uat')).toBe(null);
    expect(
      extractDeployCommandValues(
        `/bot deploy ${config.microservices[0]} to uat`,
      ),
    ).toBe(null);
    expect(
      extractDeployCommandValues(
        `/bot deploy ${config.microservices[0]} to ${config.environments[0]}`,
      ),
    ).toBe(null);
    // extra white spaces
    expect(
      extractDeployCommandValues(
        `${config.botCommand}   deploy ${config.microservices[0]}   to ${config.environments[0]}`,
      ),
    ).toBe(null);
    // extra words
    expect(
      extractDeployCommandValues(
        `${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]} right now`,
      ),
    ).toBe(null);

    expect(
      extractDeployCommandValues(
        `${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]}`,
      ),
    ).not.toBe(null);
    // trailing and leading white spaces should be okay
    expect(
      extractDeployCommandValues(
        ` ${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]}   `,
      ),
    ).not.toBe(null);
  });

  test('returns object of values for environment and microservice when parsed', () => {
    expect(
      extractDeployCommandValues(
        `${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]}`,
      ),
    ).toEqual({
      microservice: config.microservices[0],
      environment: config.environments[0],
    });
  });

  test('returns command from comment', () => {
    expect(getCommandFromComment(`${config.botCommand} help`)).toBe('help');
    expect(getCommandFromComment(`${config.botCommand}   help  me  `)).toBe(
      'help',
    );
  });
});
