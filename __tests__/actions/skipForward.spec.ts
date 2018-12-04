import { skipForward } from '../../src/actions';

describe('skipForward function', () => {
  it('is a function', () => {
    expect(typeof skipForward).toBe('function');
  });

  it('builds a skip forward action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.skipforward',
      WFWorkflowActionParameters: {},
    };

    const actual = skipForward();

    expect(actual).toEqual(expected);
  });
});
