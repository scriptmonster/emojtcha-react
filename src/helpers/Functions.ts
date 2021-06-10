/* eslint-disable */
export type ArityOneFunction = (argument: any) => any

export const compose = (...functions: ArityOneFunction[]) => {
  return (argument: any) =>
    functions.reduceRight((acc: any, curr: any) => curr(acc), argument)
}
