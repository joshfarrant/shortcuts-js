import { calculateStatistics } from '../../src/actions';

describe('calculateStatistics function', () => {

  it('is a function', () => {
    expect(typeof calculateStatistics).toBe('function');
  });

  it('builds a calculateStatistics action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.statistics',
      WFWorkflowActionParameters: {
        WFStatisticsOperation: 'Average',
      },
    };
    const actual = calculateStatistics({});

    expect(actual).toEqual(expected);
  });

  it('builds a calculateStatistics action with an explicit operation', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.statistics',
      WFWorkflowActionParameters: {
        WFStatisticsOperation: 'Median',
      },
    };
    const actual = calculateStatistics({
      operation: 'Median',
    });

    expect(actual).toEqual(expected);
  });

});
