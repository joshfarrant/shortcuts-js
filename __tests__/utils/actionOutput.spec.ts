import WFSerialization from '../../src/interfaces/WF/WFSerialization';
import { actionOutput } from '../../src/utils';

describe('actionOutput function', () => {

  it('is a function', () => {
    expect(typeof actionOutput).toBe('function');
  });

  it('returns a magic variable when passed nothing', () => {
    const uuid = '70a08121-f08d-46e4-a41f-102912750b11';

    const actual = actionOutput();
    actual.Value.OutputUUID = uuid;

    const expected: WFSerialization = {
      Value: {
        OutputUUID: uuid,
        Type: 'ActionOutput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('returns a custom named magic variable when passed a string', () => {
    const uuid = 'dd05b2e3-6069-4c4a-900a-79ae837795d6';

    const actual = actionOutput('My Result');
    actual.Value.OutputUUID = uuid;

    const expected: WFSerialization = {
      Value: {
        OutputName: 'My Result',
        OutputUUID: uuid,
        Type: 'ActionOutput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});
