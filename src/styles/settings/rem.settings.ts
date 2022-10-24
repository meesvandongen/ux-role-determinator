/**
 * Convert pixels to rem
 * eg: 16px -> 1rem
 * @param px
 */
export const rem = (px: number): string => {
  const base = 16;
  return `${(1 / base) * px}rem`;
};

/**
 * Multiplies base value, accepts values with a unit
 * eg: multiply(2, '10px'); -> '20px'
 */
export const multiplyBase = (multiple: number): string => {
  return rem(8 * multiple);
};
