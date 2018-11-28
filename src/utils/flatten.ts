/** @ignore */
export const flatten = (arr: any[]): any[] => ( // tslint:disable-line no-any
  arr.reduce(
    (acc, val) => (
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)
    ),
    [],
  )
);
