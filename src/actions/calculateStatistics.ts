import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFStatisticsOperation from '../interfaces/WF/WFStatisticsOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Calculate Statistics Action. Perform a statistical operation on incoming
 * content.
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
