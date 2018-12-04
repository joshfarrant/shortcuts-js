import {
  ICON,
} from '../../src/meta';

const { GLYPHS } = ICON;

describe('GLYPHS object', () => {

  it('is an object', () => {
    const isObject = !Array.isArray(GLYPHS) && Object(GLYPHS) === GLYPHS;

    expect(isObject).toBeTruthy();
  });

});
