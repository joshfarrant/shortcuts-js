import { vibrate } from '../../src/actions';

describe('vibrate function', () => {

  it('is a function', () => {
    expect(typeof vibrate).toBe('function');
  });

  it('builds a vibrate action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.vibrate',
      WFWorkflowActionParameters: {},
    };
    const actual = vibrate({});

    expect(actual).toEqual(expected);
  });

});
