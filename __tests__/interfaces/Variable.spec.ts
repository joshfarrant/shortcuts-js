import Variable from '../../src/interfaces/Variable';

import Attachment from '../../src/interfaces/WF/Attachment';
import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('Variable class', () => {

  it('is a class', () => {
    expect(typeof Variable).toBe('function');
  });

  it('conforms to WFSerialization when passed an Attachment', () => {
    const attachment: Attachment = {
      OutputUUID: 'a934b85d-1805-4e2d-877b-7a5bc4e8c66f',
      Type: 'ActionOutput',
    };

    const actual = new Variable(attachment);

    const expected: WFSerialization = {
      Value: attachment,
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('Variable\'s .with() method', () => {

  const variable = new Variable({
    OutputUUID: '156c765c-86f5-483d-b6f3-0a4d13180688',
    Type: 'ActionOutput',
  });

  it('returns an equal variable when passed empty options', () => {
    const actual = variable.with({});

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds type coercion aggrandizement when passed type', () => {
    const actual = variable.with({
      type: 'Dictionary',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDictionaryContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds dictionary value aggrandizement when passed getValueForKey', () => {
    const actual = variable.with({
      type: 'Dictionary',
      getValueForKey: 'My Key',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDictionaryContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          }, {
            DictionaryKey: 'My Key',
            Type: 'WFDictionaryValueVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('does not override the original variable', () => {
    variable.with({
      type: 'File',
    });

    const actual = variable;

    const expected = new Variable({
      OutputUUID: '156c765c-86f5-483d-b6f3-0a4d13180688',
      Type: 'ActionOutput',
    });

    expect(actual).toEqual(expected);
  });

});
