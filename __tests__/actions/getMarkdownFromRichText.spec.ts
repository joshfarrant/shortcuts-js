import { getMarkdownFromRichText } from '../../src/actions';

describe('getMarkdownFromRichText function', () => {
  it('is a function', () => {
    expect(typeof getMarkdownFromRichText).toBe('function');
  });

  it('builds a get markdown from rich text action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getmarkdownfromrichtext',
      WFWorkflowActionParameters: {},
    };
    const actual = getMarkdownFromRichText();

    expect(actual).toEqual(expected);
  });
});
