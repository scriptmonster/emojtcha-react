/* eslint-disable */
export type ArityOneFunction = (argument: any) => any

export const compose = (...functions: ArityOneFunction[]) => {
  return (argument: any) =>
    functions.reduceRight((acc: any, curr: any) => curr(acc), argument)
}

export const getOrElse = (obj: any, defaultValue: any): any => obj ? obj : defaultValue

export function getOrEmpty<T>(obj: T | undefined): T {
  return obj ? obj : {} as T
}