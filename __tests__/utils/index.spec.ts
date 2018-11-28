import {
  actionOutput,
  buildShortcut,
  buildShortcutTemplate,
  encodeShortcut,
  variable,
  withActionOutput,
  withVariables,
} from '../../src/utils';

import {
  actionOutput as actionOutputDirect,
} from '../../src/utils/actionOutput';
import {
  buildShortcut as buildShortcutDirect,
} from '../../src/utils/buildShortcut';
import {
  buildShortcutTemplate as buildShortcutTemplateDirect,
} from '../../src/utils/buildShortcutTemplate';
import {
  encodeShortcut as encodeShortcutDirect,
} from '../../src/utils/encodeShortcut';
import {
  variable as variableDirect,
} from '../../src/utils/variable';
import {
  withActionOutput as withActionOutputDirect,
} from '../../src/utils/withActionOutput';
import {
  withVariables as withVariablesDirect,
} from '../../src/utils/withVariables';

describe('util index.ts file', () => {

  it('exports actionOutput as a named function', () => {

    const actual = actionOutput.toString();
    const expected = actionOutputDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports buildShortcut as a named function', () => {

    const actual = buildShortcut.toString();
    const expected = buildShortcutDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports buildShortcutTemplate as a named function', () => {

    const actual = buildShortcutTemplate.toString();
    const expected = buildShortcutTemplateDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports encodeShortcut as a named function', () => {

    const actual = encodeShortcut.toString();
    const expected = encodeShortcutDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports variable as a named function', () => {

    const actual = variable.toString();
    const expected = variableDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports withActionOutput as a named function', () => {

    const actual = withActionOutput.toString();
    const expected = withActionOutputDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports withVariables as a named function', () => {

    const actual = withVariables.toString();
    const expected = withVariablesDirect.toString();

    expect(actual).toEqual(expected);
  });

});
