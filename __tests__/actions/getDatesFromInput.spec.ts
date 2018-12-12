import { getDatesFromInput } from '../../src/actions';

describe('getDatesFromInput function', () => {
  it('is a function', () => {
    expect(typeof getDatesFromInput).toBe('function');
  });

  it('builds a get dates from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.date',
      WFWorkflowActionParameters: {},
    };
    const actual = getDatesFromInput();

    expect(actual).toEqual(expected);
  });
});
