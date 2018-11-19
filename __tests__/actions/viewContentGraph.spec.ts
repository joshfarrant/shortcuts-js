import { viewContentGraph } from '../../src/actions';

describe('viewContentGraph function', () => {

  it('is a function', () => {
    expect(typeof viewContentGraph).toBe('function');
  });

  it('builds a viewContentGraph action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.viewresult',
      WFWorkflowActionParameters: {},
    };
    const actual = viewContentGraph({});

    expect(actual).toEqual(expected);
  });

});
