import { getRichTextFromMarkdown } from '../../src/actions';

describe('getRichTextFromMarkdown function', () => {
  it('is a function', () => {
    expect(typeof getRichTextFromMarkdown).toBe('function');
  });

  it('builds a get rich text from markdown action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfrommarkdown',
      WFWorkflowActionParameters: {},
    };
    const actual = getRichTextFromMarkdown();

    expect(actual).toEqual(expected);
  });
});
