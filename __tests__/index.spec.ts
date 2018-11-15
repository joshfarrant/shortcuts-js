import {
  buildShortcut,
  withVariables,
} from '../src';

import {
  buildShortcut as buildShortcutUtil,
  withVariables as withVariablesUtil,
} from '../src/utils';

describe('main index.ts file', () => {
  it('exports buildShortcut as a named function', () => {

    const actual = buildShortcut.toString();
    const expected = buildShortcutUtil.toString();

    expect(actual).toEqual(expected);
  });

  it('exports withVariables as a named function', () => {

    const actual = withVariables.toString();
    const expected = withVariablesUtil.toString();

    expect(actual).toEqual(expected);
  });
});
