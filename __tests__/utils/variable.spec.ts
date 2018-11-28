import Attachment from '../../src/interfaces/WF/Attachment';
import { variable } from '../../src/utils';

describe('variable function', () => {

  it('is a function', () => {
    expect(typeof variable).toBe('function');
  });

  it('returns a Variable attachment object when passed a string', () => {
    const actual = variable('My Variable');
    const expected: Attachment = {
      VariableName: 'My Variable',
      Type: 'Variable',
    };

    expect(actual).toEqual(expected);
  });

});
