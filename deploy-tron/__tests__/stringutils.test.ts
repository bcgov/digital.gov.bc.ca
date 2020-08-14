import {extractCommandValues} from '../src/utils/stringutils';
import config from '../__fixtures__/config.json';

describe('String Utilities', () => {
  test('returns null if command is invalid', () => {
    expect(extractCommandValues('/bot build react to uat')).toBe(null);
    expect(extractCommandValues('/bot deploy react to uat')).toBe(null);
    expect(extractCommandValues(`/bot deploy ${config.microservices[0]} to uat`)).toBe(null);
    expect(extractCommandValues(`/bot deploy ${config.microservices[0]} to ${config.environments[0]}`)).toBe(null);
    // extra white spaces
    expect(extractCommandValues(`${config.botCommand}   deploy ${config.microservices[0]}   to ${config.environments[0]}`)).toBe(null);
    // extra words
    expect(extractCommandValues(`${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]} right now`)).toBe(null);

    expect(extractCommandValues(`${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]}`)).not.toBe(null);
    // trailing and leading white spaces should be okay
    expect(extractCommandValues(` ${config.botCommand} deploy ${config.microservices[0]} to ${config.environments[0]}   `)).not.toBe(null);
  });

  test('returns object of values for environment and microservice when parsed', () => {

  });
});
