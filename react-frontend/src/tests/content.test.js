import { MiningContent } from '../components/CaseStudies/content';

test('Checking correct link', () => {
  expect(MiningContent.resourceLinks[1]).toBe('https://github.com/bcgov/mds');
});
