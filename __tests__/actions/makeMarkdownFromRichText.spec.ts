import { makeMarkdownFromRichText } from '../../src/actions';

describe('makeMarkdownFromRichText function', () => {
  it('is a function', () => {
    expect(typeof makeMarkdownFromRichText).toBe('function');
  });

  it('builds a get markdown from rich text action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getmarkdownfromrichtext',
      WFWorkflowActionParameters: {},
    };
    const actual = makeMarkdownFromRichText();

    expect(actual).toEqual(expected);
  });
});
