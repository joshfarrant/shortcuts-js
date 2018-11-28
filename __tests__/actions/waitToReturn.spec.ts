import { waitToReturn } from '../../src/actions';

describe('waitToReturn function', () => {

  it('is a function', () => {
    expect(typeof waitToReturn).toBe('function');
  });

  it('builds a waitToReturn action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.waittoreturn',
      WFWorkflowActionParameters: {},
    };
    const actual = waitToReturn();

    expect(actual).toEqual(expected);
  });

});
