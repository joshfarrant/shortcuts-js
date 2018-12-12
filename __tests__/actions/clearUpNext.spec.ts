import { clearUpNext } from '../../src/actions';

describe('clearUpNext function', () => {
  it('is a function', () => {
    expect(typeof clearUpNext).toBe('function');
  });

  it('builds a clear up next action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.clearupnext',
      WFWorkflowActionParameters: {},
    };
    const actual = clearUpNext();

    expect(actual).toEqual(expected);
  });
});
