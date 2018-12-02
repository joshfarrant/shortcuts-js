import WFSerialization from '../src/interfaces/WF/WFSerialization';
import {
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
} from '../src/variables';

describe('askWhenRun global variable', () => {

  it('has Ask type', () => {
    const actual = askWhenRun;
    const expected: WFSerialization = {
      Value: {
        Type: 'Ask',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('clipboard global variable', () => {

  it('has Clipboard type', () => {
    const actual = clipboard;
    const expected: WFSerialization = {
      Value: {
        Type: 'Clipboard',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('currentDate global variable', () => {

  it('has CurrentDate type', () => {
    const actual = currentDate;
    const expected: WFSerialization = {
      Value: {
        Type: 'CurrentDate',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('shortcutInput global variable', () => {

  it('has ExtensionInput type', () => {
    const actual = shortcutInput;
    const expected: WFSerialization = {
      Value: {
        Type: 'ExtensionInput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});
