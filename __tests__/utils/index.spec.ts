import {
  buildShortcut,
  buildShortcutTemplate,
  encodeShortcut,
  withUUID,
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
  withUUID as withUUIDDirect,
} from '../../src/utils/withUUID';
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

  it('exports withUUID as a named function', () => {

    const actual = withUUID.toString();
    const expected = withUUIDDirect.toString();

    expect(actual).toEqual(expected);
  });

  it('exports withVariables as a named function', () => {

    const actual = withVariables.toString();
    const expected = withVariablesDirect.toString();

    expect(actual).toEqual(expected);
  });
});
