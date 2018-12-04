import {
  ICON,
} from '../../src/meta';

const { COLORS } = ICON;

describe('COLORS object', () => {

  it('is an object', () => {
    const isObject = !Array.isArray(COLORS) && Object(COLORS) === COLORS;

    expect(isObject).toBeTruthy();
  });

});
