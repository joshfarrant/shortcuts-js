import Attachment from '../src/interfaces/WF/Attachment';
import {
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
} from '../src/variables';

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
