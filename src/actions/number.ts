import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Number
 * @section Actions > Scripting > Maths
 * @icon Calculator
 *
 * Passes a number to the next action.
 *
 * ```js
 * number({
 *   number: 7,
 * });
 * ```
 */

const numberAction = (
  {
    number = 0,
  }: {
    /** The number to set */
    number?: number;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.number',
  WFWorkflowActionParameters: {
    WFNumberActionNumber: number,
  },
});

export default withActionOutput(numberAction);
