import { showDefinition } from '../../src/actions';

describe('showDefinition function', () => {
  it('is a function', () => {
    expect(typeof showDefinition).toBe('function');
  });

  it('builds a show definition action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showdefinition',
      WFWorkflowActionParameters: {},
    };
    const actual = showDefinition();

    expect(actual).toEqual(expected);
  });
});
