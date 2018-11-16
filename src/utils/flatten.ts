// tslint:disable-next-line no-any
export const flatten = (arr: any[]) => (
  arr.reduce((a, c) => a.concat(c), [])
);
