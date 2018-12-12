import { matchText } from '../../src/actions';

describe('matchText function', () => {

  it('is a function', () => {
    expect(typeof matchText).toBe('function');
  });

  it('builds a matchText action if no params are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
      WFWorkflowActionParameters: {
        WFMatchTextPattern: '',
        WFMatchTextCaseSensitive: false,
      },
    };
    const actual = matchText({});

    expect(actual).toEqual(expected);
  });

  it('builds a matchText action with a given pattern, case sensitive true', () => {
    const pattern = '[0-9a-zA-Z]';
    const caseSensitive = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
      WFWorkflowActionParameters: {
        WFMatchTextPattern: '[0-9a-zA-Z]',
        WFMatchTextCaseSensitive: true,
      },
    };
    const actual = matchText({ caseSensitive, pattern });

    expect(actual).toEqual(expected);
  });

  it('builds a matchText action with a given pattern, case sensitive false', () => {
    const pattern = '[0-9a-zA-Z]';
    const caseSensitive = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
      WFWorkflowActionParameters: {
        WFMatchTextPattern: '[0-9a-zA-Z]',
        WFMatchTextCaseSensitive: false,
      },
    };
    const actual = matchText({ caseSensitive, pattern });

    expect(actual).toEqual(expected);
  });

  it('builds a matchText action without a pattern, case sensitive true', () => {
    const pattern = '';
    const caseSensitive = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
      WFWorkflowActionParameters: {
        WFMatchTextPattern: '',
        WFMatchTextCaseSensitive: true,
      },
    };
    const actual = matchText({ caseSensitive, pattern });

    expect(actual).toEqual(expected);
  });

  it('builds a matchText action without a pattern, case sensitive false', () => {
    const pattern = '';
    const caseSensitive = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
      WFWorkflowActionParameters: {
        WFMatchTextPattern: '',
        WFMatchTextCaseSensitive: false,
      },
    };
    const actual = matchText({ caseSensitive, pattern });

    expect(actual).toEqual(expected);
  });

});
