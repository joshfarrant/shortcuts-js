import { comment } from '../../src/actions';

describe('comment function', () => {

  it('is a function', () => {
    expect(typeof comment).toBe('function');
  });

  it('builds a comment action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
      WFWorkflowActionParameters: {
        WFCommentActionText: '',
      },
    };
    const actual = comment({});

    expect(actual).toEqual(expected);
  });

  it('builds a comment action with given text', () => {
    const text = 'Hello, world!';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
      WFWorkflowActionParameters: {
        WFCommentActionText: text,
      },
    };
    const actual = comment({ text });

    expect(actual).toEqual(expected);
  });

});
