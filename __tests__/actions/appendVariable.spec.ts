import { appendVariable } from '../../src/actions';

describe('appendVariable function', () => {

  it('is a function', () => {
    expect(typeof appendVariable).toBe('function');
  });

  it('builds a appendVariable action when a name is passed', () => {
    const name = 'Test Variable';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
      WFWorkflowActionParameters: {
        WFVariableName: name,
      },
    };
    const actual = appendVariable({ name });

    expect(actual).toEqual(expected);
  });
});
