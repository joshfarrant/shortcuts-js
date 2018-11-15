import * as fs from 'fs';

import { buildShortcut } from '../../src/utils';

import {
  testActions,
} from '../_fixtures/actions';

const fsp = fs.promises;

describe('buildShortcut function', () => {

  it('is a function', () => {
    expect(typeof buildShortcut).toBe('function');
  });

  it('builds an encoded shortcut object when no params are passed', async () => {
    expect.assertions(1);

    const expected = await fsp.readFile('./__tests__/_fixtures/Empty.shortcut');

    const actual = buildShortcut();
    expect(actual).toEqual(expected);
  });

  it('builds an encoded shortcut object when an actions array is passed', async () => {
    expect.assertions(1);

    const expected = await fsp.readFile('./__tests__/_fixtures/Actions.shortcut');

    const actual = buildShortcut(testActions);
    expect(actual).toEqual(expected);
  });

});
