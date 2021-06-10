/* eslint-disable no-irregular-whitespace */
export const messMap = (strArray: string[]): string[] =>
  strArray
    .map((v) => (Math.random() > 0.5 ? `${v}​` : v))
    .map((v) => (Math.random() > 0.7 ? `${v}​` : v))

export const messup = (str: string): string => messMap(str.split('')).join('​')
