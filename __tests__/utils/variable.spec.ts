import WFSerialization from '../../src/interfaces/WF/WFSerialization';
import { variable } from '../../src/utils';

describe('variable function', () => {

  it('is a function', () => {
    expect(typeof variable).toBe('function');
  });

  it('returns a variable when passed a string', () => {
    const actual = variable('My Variable');
    const expected: WFSerialization = {
      Value: {
        VariableName: 'My Variable',
        Type: 'Variable',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});
