import { getTextFromInput } from '../../src/actions';

describe('getTextFromInput function', () => {
  it('is a function', () => {
    expect(typeof getTextFromInput).toBe('function');
  });

  it('builds a get text from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.text',
      WFWorkflowActionParameters: {},
    };
    const actual = getTextFromInput();

    expect(actual).toEqual(expected);
  });
});
