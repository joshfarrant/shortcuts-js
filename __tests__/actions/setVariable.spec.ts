import { setVariable } from '../../src/actions';
import { variable } from '../../src/utils';

describe('setVariable function', () => {

  it('is a function', () => {
    expect(typeof setVariable).toBe('function');
  });

  it('builds a setVariable action when a variable is passed', () => {
    const name = variable('Test Variable');

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
      WFWorkflowActionParameters: {
        WFVariableName: name.VariableName,
      },
    };

    const actual = setVariable({
      variable: name,
    });

    expect(actual).toEqual(expected);
  });

});
