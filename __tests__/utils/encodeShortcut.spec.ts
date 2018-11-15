import { encodeShortcut } from '../../src/utils';

import { testShortcutNoActions } from '../_fixtures/actions';

const createBplist: (obj: {}) => string = require('bplist-creator');

describe('encodeShortcut function', () => {

  it('is a function', () => {
    expect(typeof encodeShortcut).toBe('function');
  });

  it('converts the shortcut to a bplist', () => {
    const expected = createBplist(testShortcutNoActions);
    const actual = encodeShortcut(testShortcutNoActions);

    expect(actual).toEqual(expected);
  });

});
