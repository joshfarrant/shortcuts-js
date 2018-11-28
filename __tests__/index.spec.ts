import {
  actionOutput,
  buildShortcut,
  variable,
  withVariables,
} from '../src';

import {
  actionOutput as actionOutputUtil,
  buildShortcut as buildShortcutUtil,
  variable as variableUtil,
  withVariables as withVariablesUtil,
} from '../src/utils';

describe('main index.ts file', () => {

  it('exports actionOutput as a named function', () => {

    const actual = actionOutput.toString();
    const expected = actionOutputUtil.toString();

    expect(actual).toEqual(expected);
  });

  it('exports buildShortcut as a named function', () => {

    const actual = buildShortcut.toString();
    const expected = buildShortcutUtil.toString();

    expect(actual).toEqual(expected);
  });

  it('exports variable as a named function', () => {

    const actual = variable.toString();
    const expected = variableUtil.toString();

    expect(actual).toEqual(expected);
  });

  it('exports withVariables as a named function', () => {

    const actual = withVariables.toString();
    const expected = withVariablesUtil.toString();

    expect(actual).toEqual(expected);
  });

});
