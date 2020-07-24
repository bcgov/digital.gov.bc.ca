import { mediaQuery } from '../styleTokens';

describe('MediaQuery', () => {
  it('returns @media screen and (min-width: 240px)', () => {
    expect(mediaQuery(240)).toBe('@media screen and (min-width: 240px)');
  });

  it('returns @media screen and (min-width: 20em)', () => {
    expect(mediaQuery(20, 'em')).toBe('@media screen and (min-width: 20em)');
  });

  it('returns @media print and (min-width: 20em)', () => {
    expect(mediaQuery(20, 'em', 'print')).toBe(
      '@media print and (min-width: 20em)'
    );
  });
});
