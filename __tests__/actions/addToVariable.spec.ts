import { addToVariable } from '../../src/actions';

describe('addToVariable function', () => {

  it('is a function', () => {
    expect(typeof addToVariable).toBe('function');
  });

  it('builds a addToVariable action when a name is passed', () => {
    const name = 'Test Variable';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
      WFWorkflowActionParameters: {
        WFVariableName: name,
      },
    };
    const actual = addToVariable({ name });

    expect(actual).toEqual(expected);
  });
});
