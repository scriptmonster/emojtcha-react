import { compose } from './Functions'

/* eslint-disable no-irregular-whitespace */
export const messMap = (strArray: string[]): string[] =>
  strArray
    .map((v) => (Math.random() > 0.5 ? `${v}​` : v))
    .map((v) => (Math.random() > 0.7 ? `${v}​` : v))

export const messup = (str: string): string => messMap(str.split('')).join('​')

export const toCapitalCase = (str: string): string =>
  str
    .split('')
    .map((c: string, index: number) => (index === 0 ? c.toUpperCase() : c))
    .join('')

export const formattedMessedUp = (str: string): string =>
  compose(messup, toCapitalCase)(str)
