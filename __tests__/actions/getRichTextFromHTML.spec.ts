import { getRichTextFromHTML } from '../../src/actions';

describe('getRichTextFromHTML function', () => {
  it('is a function', () => {
    expect(typeof getRichTextFromHTML).toBe('function');
  });

  it('builds a get rich text from html action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfromhtml',
      WFWorkflowActionParameters: {},
    };
    const actual = getRichTextFromHTML();

    expect(actual).toEqual(expected);
  });
});
