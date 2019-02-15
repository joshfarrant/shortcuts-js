import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFStatisticsOperation from '../interfaces/WF/WFStatisticsOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  /** The operation to perform */
  operation?: WFSerialization | WFStatisticsOperation;
}

const identifier = 'is.workflow.actions.statistics';

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

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  operation: WFAction.WFWorkflowActionParameters.WFStatisticsOperation,
});

calculateStatistics.identifier = identifier;
calculateStatistics.invert = invert;

export default withActionOutput(calculateStatistics);
