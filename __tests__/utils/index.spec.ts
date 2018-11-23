import {
  buildShortcut,
  buildShortcutTemplate,
  encodeShortcut,
  withActionOutput,
  withVariables,
} from '../../src/utils';

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
  withActionOutput as withUUIDDirect,
} from '../../src/utils/withActionOutput';
import {
  withVariables as withVariablesDirect,
} from '../../src/utils/withVariables';

describe('util index.ts file', () => {

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

  it('exports withActionOutput as a named function', () => {

    const actual = withActionOutput.toString();
    const expected = withUUIDDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports withVariables as a named function', () => {

    const actual = withVariables.toString();
    const expected = withVariablesDirect.toString();

    expect(actual).toEqual(expected);
  });
});
