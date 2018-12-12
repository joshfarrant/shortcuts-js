import { makeRichTextFromHTML } from '../../src/actions';

describe('makeRichTextFromHTML function', () => {
  it('is a function', () => {
    expect(typeof makeRichTextFromHTML).toBe('function');
  });

  it('builds a get rich text from html action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfromhtml',
      WFWorkflowActionParameters: {},
    };
    const actual = makeRichTextFromHTML();

    expect(actual).toEqual(expected);
  });
});
