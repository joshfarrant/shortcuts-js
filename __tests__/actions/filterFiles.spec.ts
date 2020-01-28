import { filterFiles } from '../../src/actions';

describe('filterFiles function', () => {
  it('is a function', () => {
    expect(typeof filterFiles).toBe('function');
  });

  it('builds a facetime action with default type', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.filter.files',
      WFWorkflowActionParameters: {
      },
    };
    const actual = filterFiles({});

    expect(actual).toEqual(expected);
  });
});
