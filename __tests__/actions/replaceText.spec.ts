import { replaceText } from '../../src/actions';

describe('replaceText function', () => {

  it('is a function', () => {
    expect(typeof replaceText).toBe('function');
  });

  it('builds a replaceText action if no params are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({});

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, with a given replaceWith, case sensitive true, regular expression true', () => {
    const findText = 'hello';
    const replaceWith = 'world';
    const caseSensitive = true;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, with a given replaceWith, case sensitive true, regular expression false', () => {
    const findText = 'hello';
    const replaceWith = 'world';
    const caseSensitive = true;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, with a given replaceWith, case sensitive false, regular expression true', () => {
    const findText = 'hello';
    const replaceWith = 'world';
    const caseSensitive = false;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, with a given replaceWith, case sensitive false, regular expression false', () => {
    const findText = 'hello';
    const replaceWith = 'world';
    const caseSensitive = false;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, without replaceWith, case sensitive true, regular expression true', () => {
    const findText = 'hello';
    const replaceWith = '';
    const caseSensitive = true;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, without replaceWith, case sensitive true, regular expression false', () => {
    const findText = 'hello';
    const replaceWith = '';
    const caseSensitive = true;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, without replaceWith, case sensitive false, regular expression true', () => {
    const findText = 'hello';
    const replaceWith = '';
    const caseSensitive = false;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action with a given findText, without replaceWith, case sensitive false, regular expression false', () => {
    const findText = 'hello';
    const replaceWith = '';
    const caseSensitive = false;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: 'hello',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, with a given replaceWith, case sensitive true, regular expression true', () => {
    const findText = '';
    const replaceWith = 'world';
    const caseSensitive = true;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, with a given replaceWith, case sensitive true, regular expression false', () => {
    const findText = '';
    const replaceWith = 'world';
    const caseSensitive = true;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, with a given replaceWith, case sensitive false, regular expression true', () => {
    const findText = '';
    const replaceWith = 'world';
    const caseSensitive = false;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, with a given replaceWith, case sensitive false, regular expression false', () => {
    const findText = '';
    const replaceWith = 'world';
    const caseSensitive = false;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: 'world',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, without replaceWith, case sensitive true, regular expression true', () => {
    const findText = '';
    const replaceWith = '';
    const caseSensitive = true;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, without replaceWith, case sensitive true, regular expression false', () => {
    const findText = '';
    const replaceWith = '';
    const caseSensitive = true;
    const regularExpression = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: true,
        WFReplaceTextRegularExpression: false,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

  it('builds a replaceText action without findText, without replaceWith, case sensitive false, regular expression true', () => {
    const findText = '';
    const replaceWith = '';
    const caseSensitive = false;
    const regularExpression = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
      WFWorkflowActionParameters: {
        WFReplaceTextFind: '',
        WFReplaceTextReplace: '',
        WFReplaceTextCaseSensitive: false,
        WFReplaceTextRegularExpression: true,
      },
    };
    const actual = replaceText({ findText, replaceWith, caseSensitive, regularExpression });

    expect(actual).toEqual(expected);
  });

});
