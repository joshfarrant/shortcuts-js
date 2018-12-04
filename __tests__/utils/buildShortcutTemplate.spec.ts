import { buildShortcutTemplate } from '../../src/utils';

import {
  testActions,
  testShortcutNoActions,
  testShortcutWithActions,
  testShortcutWithModifiedOptions,
} from '../_fixtures/actions';

const defaultOptions = {
  icon: {
    color: 4274264319,
    glyph: 59446,
  },
};

describe('buildShortcutTemplate function', () => {

  it('is a function', () => {
    expect(typeof buildShortcutTemplate).toBe('function');
  });

  it('builds a shortcut object when no actions are passed', () => {
    const expected = testShortcutNoActions;

    const actual = buildShortcutTemplate(undefined, defaultOptions);
    expect(actual).toMatchObject(expected);
  });

  it('builds a shortcut object when an actions array is passed', () => {
    const expected = testShortcutWithActions;

    const actual = buildShortcutTemplate(testActions, defaultOptions);
    expect(actual).toMatchObject(expected);
  });

  it('builds a shortcut object when an options object is passed', () => {
    const expected = testShortcutWithModifiedOptions;

    const actual = buildShortcutTemplate(testActions, {
      icon: {
        color: 3980825855,
        glyph: 59769,
      },
    });
    expect(actual).toMatchObject(expected);
  });

});
