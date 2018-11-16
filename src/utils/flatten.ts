// tslint:disable-next-line no-any
export const flatten = (arr: any[]): any[] => (
  arr.reduce(
    (acc, val) => (
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)
    ),
    [],
  )
);
