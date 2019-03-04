import { calculateStatistics } from '../../src/actions';

import WFStatisticsOperation from '../../src/interfaces/WF/WFStatisticsOperation';
import WFWorkflowActionIdentifier from '../../src/interfaces/WF/WFWorkflowActionIdentifier';

describe('calculateStatistics function', () => {

  it('is a function', () => {
    expect(typeof calculateStatistics).toBe('function');
  });

  it('has an identifier property, which is a string', () => {
    expect(typeof calculateStatistics.identifier).toBe('string');
  });

  it('has an invert property, which is a function', () => {
    expect(typeof calculateStatistics.invert).toBe('function');
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

  it('inverts a calculateStatistics action', () => {
    if (calculateStatistics.invert) {
      const action = {
        WFWorkflowActionIdentifier: 'is.workflow.actions.statistics' as WFWorkflowActionIdentifier,
        WFWorkflowActionParameters: {
          WFStatisticsOperation: 'Average' as WFStatisticsOperation,
        },
      };
      const actual = calculateStatistics.invert(action);
      const expected = {
        operation: 'Average',
      };

      expect(actual).toEqual(expected);
    }
  });

});
