import { buildShortcutTemplate } from '../../src/utils';

import BuildShortcutOptions from '../../src/interfaces/BuildShortcutOptions';

import {
  testActions,
  testShortcutNoActions,
  testShortcutNoActionsNoWidget,
  testShortcutWithActions,
  testShortcutWithModifiedOptions,
} from '../_fixtures/actions';

const defaultOptions: BuildShortcutOptions = {
  icon: {
    color: 4274264319,
    glyph: 59446,
  },
  showInWidget: true,
};

const noWidgetOptions: BuildShortcutOptions = {
  icon: {
    color: 4274264319,
    glyph: 59446,
  },
  showInWidget: false,
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
      showInWidget: true,
    });
    expect(actual).toMatchObject(expected);
  });

  it('builds a shortcut object that is not shown in shortcuts widget', () => {
    const expected = testShortcutNoActionsNoWidget;

    const actual = buildShortcutTemplate(undefined, noWidgetOptions);
    expect(actual).toMatchObject(expected);
  });

});
