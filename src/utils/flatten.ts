/** @ignore */
export const flatten = <T>(arr: T[]): T[] => (
  arr.reduce(
    (acc: T[], val: T) => (
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)
    ),
    [],
  )
);
