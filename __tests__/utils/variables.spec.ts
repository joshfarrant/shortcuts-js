import Attachment from '../../src/interfaces/WF/Attachment';
import {
  actionOutput,
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
  variable,
} from '../../src/utils/variables';

describe('actionOutput function', () => {
  it('is a function', () => {
    expect(typeof actionOutput).toBe('function');
  });

  it('returns an ActionOutput attachment object when passed nothing', () => {
    const uuid = '70a08121-f08d-46e4-a41f-102912750b11';

    const actual = actionOutput();
    actual.OutputUUID = uuid;

    const expected: Attachment = {
      OutputUUID: uuid,
      Type: 'ActionOutput',
    };

    expect(actual).toEqual(expected);
  });

  it('returns a custom named ActionOutput attachment object when passed a string', () => {
    const uuid = 'dd05b2e3-6069-4c4a-900a-79ae837795d6';

    const actual = actionOutput('My Result');
    actual.OutputUUID = uuid;

    const expected: Attachment = {
      OutputName: 'My Result',
      OutputUUID: uuid,
      Type: 'ActionOutput',
    };

    expect(actual).toEqual(expected);
  });
});

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

describe('askWhenRun global variable', () => {
  it('is an Ask attachment', () => {
    const actual = askWhenRun;
    const expected: Attachment = {
      Type: 'Ask',
    };

    expect(actual).toEqual(expected);
  });
});

describe('clipboard global variable', () => {
  it('is an Ask attachment', () => {
    const actual = clipboard;
    const expected: Attachment = {
      Type: 'Clipboard',
    };

    expect(actual).toEqual(expected);
  });
});

describe('currentDate global variable', () => {
  it('is an Ask attachment', () => {
    const actual = currentDate;
    const expected: Attachment = {
      Type: 'CurrentDate',
    };

    expect(actual).toEqual(expected);
  });
});

describe('shortcutInput global variable', () => {
  it('is an Ask attachment', () => {
    const actual = shortcutInput;
    const expected: Attachment = {
      Type: 'ExtensionInput',
    };

    expect(actual).toEqual(expected);
  });
});
