import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  number?: number;
}

const identifier = 'is.workflow.actions.number';

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
const number = (
  {
    /** The number to set */
    number = 0,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFNumberActionNumber: number,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  number: WFAction.WFWorkflowActionParameters.WFNumberActionNumber,
});

number.identifier = identifier;
number.invert = invert;

export default withActionOutput(number);
