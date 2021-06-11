import { compose } from './Functions'

/* eslint-disable no-irregular-whitespace  */
/* eslint-disable import/prefer-default-export */
const messup = (str: string): string =>
  str
    .split('')
    .map((v) => (Math.random() > 0.5 ? `${v}​` : v))
    .map((v) => (Math.random() > 0.7 ? `${v}​` : v))
    .join('​')

const toCapitalCase = (str: string): string =>
  str
    .split('')
    .map((c: string, index: number) => (index === 0 ? c.toUpperCase() : c))
    .join('')

const encloseWith = (encloser: string) => (str: string) =>
  encloser + str + encloser

const encloseWithQuote = (str: string): string => encloseWith('"')(str)

export const formattedMessedUp = (str: string): string =>
  compose(messup, encloseWithQuote, toCapitalCase)(str)
