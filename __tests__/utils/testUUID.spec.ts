import { testUUID } from '../../src/utils';

describe('testUUID function', () => {

  it('is a function', () => {
    expect(typeof testUUID).toBe('function');
  });

  it('returns true for a valid UUID string', () => {
    const actual = testUUID('b74c81a8-192a-463f-a0a6-2d327963714f');
    expect(actual).toBe(true);
  });

  it('returns true for a invalid UUID string', () => {
    const actual = testUUID('');
    expect(actual).toBe(false);
  });
});
