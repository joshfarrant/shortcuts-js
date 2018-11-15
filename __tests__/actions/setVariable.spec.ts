import { setVariable } from '../../src/actions';

describe('setVariable function', () => {

  it('is a function', () => {
    expect(typeof setVariable).toBe('function');
  });

  it('builds a setVariable action when a name is passed', () => {
    const name = 'Test Variable';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
      WFWorkflowActionParameters: {
        WFVariableName: name,
      },
    };
    const actual = setVariable({ name });

    expect(actual).toEqual(expected);
  });

});
