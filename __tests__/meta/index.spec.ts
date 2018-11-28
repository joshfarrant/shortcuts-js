import {
  ICON,
} from '../../src/meta';

import {
  COLORS as COLORS_DIRECT,
} from '../../src/meta/colors';
import {
  GLYPHS as GLYPHS_DIRECT,
} from '../../src/meta/glyphs';

describe('meta index.ts file', () => {

  it('exports an ICON object', () => {

    const isObject = !Array.isArray(ICON) && Object(ICON) === ICON;

    expect(isObject).toBeTruthy();
  });

  it('exports ICON.COLORS as an object', () => {

    const actual = ICON.COLORS.toString();
    const expected = COLORS_DIRECT.toString();

    expect(actual).toEqual(expected);
  });

  it('exports ICON.GLYPHS as an object', () => {

    const actual = ICON.GLYPHS.toString();
    const expected = GLYPHS_DIRECT.toString();

    expect(actual).toEqual(expected);
  });

});
