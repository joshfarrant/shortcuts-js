import { print } from '../../src/actions';

describe('print function', () => {

  it('is a function', () => {
    expect(typeof print).toBe('function');
  });

  it('builds a print action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.print',
      WFWorkflowActionParameters: {},
    };
    const actual = print({});

    expect(actual).toEqual(expected);
  });

});
