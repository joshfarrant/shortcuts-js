import { getItemType } from '../../src/utils';

describe('getItemType function', () => {

  it('is a function', () => {
    expect(typeof getItemType).toBe('function');
  });

  it('returns 0 when passed a string', () => {
    const actual = getItemType('Hello');
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  it('returns 1 when passed an object', () => {
    const actual = getItemType({});
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  it('returns 2 when passed an array', () => {
    const actual = getItemType([]);
    const expected = 2;
    expect(actual).toEqual(expected);
  });

  it('returns 3 when passed a number', () => {
    const actual = getItemType(123);
    const expected = 3;
    expect(actual).toEqual(expected);
  });

  it('returns 4 when passed a boolean', () => {
    const actual = getItemType(true);
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('throws an error when passed an invalid type', () => {
    // tslint:disable-next-line no-any
    const actual = () => getItemType(null as any);
    expect(actual).toThrow('Invalid itemType');
  });
});
