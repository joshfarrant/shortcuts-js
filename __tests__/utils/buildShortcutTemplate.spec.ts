import { buildShortcutTemplate } from '../../src/utils';

import {
  testActions,
  testShortcutNoActions,
  testShortcutWithActions,
} from '../_fixtures/actions';

describe('buildShortcutTemplate function', () => {

  it('is a function', () => {
    expect(typeof buildShortcutTemplate).toBe('function');
  });

  it('builds a shortcut object when no params are passed', () => {
    const expected = testShortcutNoActions;

    const actual = buildShortcutTemplate();
    expect(actual).toMatchObject(expected);
  });

  it('builds a shortcut object when an actions array is passed', () => {
    const expected = testShortcutWithActions;

    const actual = buildShortcutTemplate(testActions);
    expect(actual).toMatchObject(expected);
  });

});
