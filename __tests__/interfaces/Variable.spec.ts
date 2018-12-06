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

  it('adds type coercion aggrandizement when type option is passed', () => {
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

  it('adds date format aggrandizement when dateFormat and timeFormat options are passed', () => {
    const actual = variable.with({
      type: 'Date',
      dateFormat: 'Long',
      timeFormat: 'None',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDateContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          }, {
            WFDateFormatStyle: 'Long',
            WFTimeFormatStyle: 'None',
            WFISO8601IncludeTime: false,
            Type: 'WFDateFormatVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds relative date format aggrandizement when dateFormat is \'Relative\'', () => {
    const actual = variable.with({
      type: 'Date',
      dateFormat: 'Relative',
      timeFormat: 'Long',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDateContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          }, {
            WFDateFormatStyle: 'Relative',
            WFTimeFormatStyle: 'Long',
            WFISO8601IncludeTime: false,
            WFRelativeDateFormatStyle: 'Short',
            Type: 'WFDateFormatVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds relative date format aggrandizement when dateFormat is \'How Long Ago/Until\'', () => {
    const actual = variable.with({
      type: 'Date',
      dateFormat: 'How Long Ago/Until',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDateContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          }, {
            WFDateFormatStyle: 'Relative',
            WFISO8601IncludeTime: false,
            Type: 'WFDateFormatVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds custom date format aggrandizement when customFormat option is passed', () => {
    const actual = variable.with({
      type: 'Date',
      dateFormat: 'Custom',
      customFormat: 'HH:mm',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDateContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          }, {
            WFDateFormatStyle: 'Custom',
            WFDateFormat: 'HH:mm',
            WFISO8601IncludeTime: false,
            Type: 'WFDateFormatVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds ISO 8601 date format aggrandizement when timeFormat is \'ISO 8601 Time\'', () => {
    const actual = variable.with({
      type: 'Date',
      dateFormat: 'ISO 8601',
      timeFormat: 'ISO 8601 Time',
    });

    const expected: WFSerialization = {
      Value: {
        OutputUUID: variable.Value.OutputUUID,
        Type: 'ActionOutput',
        Aggrandizements: [
          {
            CoercionItemClass: 'WFDateContentItem',
            Type: 'WFCoercionVariableAggrandizement',
          }, {
            WFDateFormatStyle: 'ISO 8601',
            WFISO8601IncludeTime: true,
            Type: 'WFDateFormatVariableAggrandizement',
          },
        ],
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

  it('adds dictionary value aggrandizement when getValueForKey option is passed', () => {
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
