import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFStatisticsOperation from '../interfaces/WF/WFStatisticsOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Calculate Statistics
 * @section Actions > Scripting > Math
 * @icon Calculator
 *
 * Calculates statistics on the numbers that are provided as input.
 *
 * ```js
 * calculateStatistics({
 *   operation: 'Average',
 * });
 * ```
 */

const calculateStatistics = (
  options: {
    /** The operation to perform */
    operation?: WFSerialization | WFStatisticsOperation,
  },
): WFWorkflowAction => {
  const {
    operation = 'Average',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.statistics',
    WFWorkflowActionParameters: {
      WFStatisticsOperation: operation,
    },
  };
};

export default withActionOutput(calculateStatistics);
