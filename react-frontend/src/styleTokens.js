// this is an enum of all the bootstrap-esque breakpoint values
// most gov sites are based on a boostrap theme and so this should fit nicely
export const BREAKPOINT_VALUES = {
  xs: 10,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

/**
 * builds a media query string based on a value and media type
 * @param {Number} value the amount in pixels
 * @param {String} mediaType the media type one of [screen, print, etc]. Defaults to 'screen'
 *
 * @returns {String} eg: mediaQuery(200); => '@media screen and (min-width: 200px)'
 */
export const mediaQuery = (value, unit = 'px', mediaType = 'screen') =>
  `@media ${mediaType} and (min-width: ${value}${unit})`;

// enum of breakpoint values that are embeddable in a styled component
// BREAKPOINTS.sm => @media screen and (min-width: ${value}${unit})
export const BREAKPOINTS = Object.keys(BREAKPOINT_VALUES).reduce(
  (breakpoints, key) => {
    // get media query for breakpoint value
    breakpoints[key] = mediaQuery(BREAKPOINT_VALUES[key]);
    return breakpoints;
  },
  {}
);

export const CUSTOM_BREAKPOINTS = {
  headerToMobileTransition: mediaQuery(800),
};
