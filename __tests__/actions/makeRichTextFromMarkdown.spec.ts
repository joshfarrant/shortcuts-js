import { makeRichTextFromMarkdown } from '../../src/actions';

describe('makeRichTextFromMarkdown function', () => {
  it('is a function', () => {
    expect(typeof makeRichTextFromMarkdown).toBe('function');
  });

  it('builds a get rich text from markdown action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfrommarkdown',
      WFWorkflowActionParameters: {},
    };
    const actual = makeRichTextFromMarkdown();

    expect(actual).toEqual(expected);
  });
});
