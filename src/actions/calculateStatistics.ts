import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFStatisticsOperation from '../interfaces/WF/WFStatisticsOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const identifier = 'is.workflow.actions.statistics';

interface Options {
  /** The operation to perform */
  operation?: WFSerialization | WFStatisticsOperation;
}

/**
 * @action Calculate Statistics
 * @section Actions > Scripting > Maths
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
  {
    operation = 'Average',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFStatisticsOperation: operation,
  },
});

export default withActionOutput(calculateStatistics);
