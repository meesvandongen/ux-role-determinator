import { css, CSSObject, SimpleInterpolation } from "styled-components";
// Models
import { eBreakpoint, iBreakpoints } from "./media.models";

export type MediaQueryVariants = "up" | "down" | "only" | "between";

type ValidBreakpoint = keyof iBreakpoints;

const BREAKPOINTS: iBreakpoints = {
  // XS size is set to 0, because other wise if you'd use a breakpoint
  // between XS and SM, everything under 320px would not be styled.
  [eBreakpoint.SMALLEST]: "320px",
  [eBreakpoint.SMALLER]: "375px",
  [eBreakpoint.SMALL]: "480px",
  [eBreakpoint.MEDIUM]: "768px",
  [eBreakpoint.LARGE]: "1024px",
  [eBreakpoint.LARGER]: "1200px",
  [eBreakpoint.LARGEST]: "1440px",
};

/* Media query helpers */

/**
 * Checks whether media query exists in BREAKPOINTS object.
 * @param breakpoint Breakpoint name
 * @param throwOnError By default this function throws an error if it is invalid.
 * You can bypass that with this boolean
 */
const isValidBreakpoint = (
  breakpoint: ValidBreakpoint,
  throwOnError: boolean = true,
) => {
  if (!BREAKPOINTS[breakpoint] && throwOnError)
    throw new Error(`Using non existing breakpoint: ${breakpoint}`);
  return !!BREAKPOINTS[breakpoint];
};

/**
 * Checks if there is a breakpoing that comes after the 'breakpoint' argument.
 * @param breakpoint Breakpoint name
 * @param throwOnError By default this function throws an error if it is invalid.
 * You can bypass that with this boolean
 */
export const getNextBreakpoint = (
  breakpoint: ValidBreakpoint,
  throwOnError: boolean = true,
) => {
  isValidBreakpoint(breakpoint);

  const keys = Object.keys(BREAKPOINTS);
  const index = keys.indexOf(breakpoint);
  const nextBreakpoint = keys[index + 1];

  if (!nextBreakpoint && throwOnError) {
    throw new Error(
      `${breakpoint} is the biggest breakpoint there is. So '${breakpoint} and down' doesn't exist.`,
    );
  }

  return nextBreakpoint as ValidBreakpoint;
};

/* Media query methods */

/**
 * From this breakpoint (including) and up.
 * @param breakpoint
 */
const up =
  (breakpoint: ValidBreakpoint) =>
  (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => {
    isValidBreakpoint(breakpoint);

    return css`
      @media only screen and (min-width: ${BREAKPOINTS[breakpoint]}) {
        ${css(first, ...interpolations)}
      }
    `;
  };

/**
 * Until this breakpoint (including).
 * @param breakpoint
 */
const down =
  (breakpoint: ValidBreakpoint) =>
  (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => {
    isValidBreakpoint(breakpoint);
    const nextBreakpoint = getNextBreakpoint(breakpoint);

    return css`
      @media only screen and (max-width: ${`${
          parseInt(BREAKPOINTS[nextBreakpoint], 10) - 1
        }px`}) {
        ${css(first, ...interpolations)}
      }
    `;
  };

/**
 * From breakpoint 'min' until breakpoint 'max'.
 * @param min
 * @param max
 */
const between =
  (min: ValidBreakpoint, max: ValidBreakpoint) =>
  (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => {
    isValidBreakpoint(min);
    isValidBreakpoint(max);

    return css`
      @media only screen and (min-width: ${BREAKPOINTS[
          min
        ]}) and (max-width: ${`${parseInt(BREAKPOINTS[max], 10) - 1}px`}) {
        ${css(first, ...interpolations)}
      }
    `;
  };

/**
 * Only a specific range. Eg only('md') will result in between('md', 'lg').
 * @param breakpoint
 */
const only = (breakpoint: ValidBreakpoint) => {
  const nextBreakpoint = getNextBreakpoint(breakpoint, false);
  return isValidBreakpoint(nextBreakpoint, false)
    ? between(breakpoint, nextBreakpoint)
    : up(breakpoint);
};

export default {
  up,
  down,
  between,
  only,
};
