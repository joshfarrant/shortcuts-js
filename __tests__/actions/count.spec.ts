import { count } from '../../src/actions';

describe('count function', () => {

  it('is a function', () => {
    expect(typeof count).toBe('function');
  });

  it('builds a count action when no type is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.count',
      WFWorkflowActionParameters: {
        WFCountType: 'Items',
      },
    };
    const actual = count({});

    expect(actual).toEqual(expected);
  });

  it('builds a count action when name and show are passed', () => {
    const type = 'Sentences';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.count',
      WFWorkflowActionParameters: {
        WFCountType: type,
      },
    };
    const actual = count({ type });

    expect(actual).toEqual(expected);
  });

});
