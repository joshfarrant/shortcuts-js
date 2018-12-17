import {
  buildShortcut,
  buildShortcutTemplate,
  encodeShortcut,
} from '../../src/utils';

import {
  testActions,
} from '../_fixtures/actions';

describe('buildShortcut function', () => {

  it('is a function', () => {
    expect(typeof buildShortcut).toBe('function');
  });

  it('builds an encoded shortcut object when no params are passed', () => {
    const template = buildShortcutTemplate([], {
      icon: {
        color: 4274264319,
        glyph: 59446,
      },
      showInWidget: true,
    });
    const expected = encodeShortcut(template);

    const actual = buildShortcut();
    expect(actual).toEqual(expected);
  });

  it('builds an encoded shortcut object when an actions array is passed', () => {
    const template = buildShortcutTemplate(testActions, {
      icon: {
        color: 4274264319,
        glyph: 59446,
      },
      showInWidget: true,
    });
    const expected = encodeShortcut(template);

    const actual = buildShortcut(testActions);
    expect(actual).toEqual(expected);
  });

  it('builds an encoded shortcut object when an options object is passed', () => {
    const options = {
      icon: {
        color: 1440408063,
        glyph: 59784,
      },
      showInWidget: true,
    };
    const template = buildShortcutTemplate(testActions, options);
    const expected = encodeShortcut(template);

    const actual = buildShortcut(testActions, options);
    expect(actual).toEqual(expected);
  });

  it('builds an encoded shortcut object when an incomplete options object is passed', () => {
    const template = buildShortcutTemplate(testActions, {
      icon: {
        color: 1440408063,
        glyph: 59446,
      },
      showInWidget: true,
    });
    const expected = encodeShortcut(template);

    const actual = buildShortcut(testActions, {
      icon: {
        color: 1440408063,
      },
    });
    expect(actual).toEqual(expected);
  });

  it('builds an encoded shortcut object that is not shown in shortcuts widget', () => {
    const template = buildShortcutTemplate([], {
      icon: {
        color: 4274264319,
        glyph: 59446,
      },
      showInWidget: false,
    });
    const expected = encodeShortcut(template);

    const actual = buildShortcut([], { showInWidget: false });
    expect(actual).toEqual(expected);
  });

});
