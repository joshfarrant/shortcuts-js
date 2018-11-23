import { addToVariable } from '../../src/actions';
import { variable } from '../../src/utils/variables';

describe('addToVariable function', () => {

  it('is a function', () => {
    expect(typeof addToVariable).toBe('function');
  });

  it('builds a addToVariable action when a variable is passed', () => {
    const name = variable('Test Variable');

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
      WFWorkflowActionParameters: {
        WFVariableName: name.VariableName,
      },
    };

    const actual = addToVariable({
      variable: name,
    });

    expect(actual).toEqual(expected);
  });
});
