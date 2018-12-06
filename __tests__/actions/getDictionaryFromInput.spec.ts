import { getDictionaryFromInput } from '../../src/actions';

describe('getDictionaryFromInput function', () => {
  it('is a function', () => {
    expect(typeof getDictionaryFromInput).toBe('function');
  });

  it('builds a get dictionary from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.dictionary',
      WFWorkflowActionParameters: {},
    };
    const actual = getDictionaryFromInput();

    expect(actual).toEqual(expected);
  });
});
