import { flatten } from '../../src/utils';

describe('flatten function', () => {

  it('is a function', () => {
    expect(typeof flatten).toBe('function');
  });

  it('doesn\'t modify a 1 level deep array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = input;
    const actual = flatten(input);

    expect(actual).toEqual(expected);
  });

  it('flattens a 2 level deep array', () => {
    const input = [1, [2, 3], 4, [5, 6, 7], 8, 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actual = flatten(input);

    expect(actual).toEqual(expected);
  });

  it('flattens a 4 level deep array', () => {
    const input = [1, [2, [3, 4, [5, 6, 7], 8]], 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actual = flatten(input);

    expect(actual).toEqual(expected);
  });

});
