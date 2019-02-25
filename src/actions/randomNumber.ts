import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  minimum?: WFSerialization | number;
  maximum?: WFSerialization | number;
}

const identifier = 'is.workflow.actions.number.random';

/**
 * @action Random Number
 * @section Actions > Scripting > Maths
 * @icon Calculator
 *
 * Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results.
 *
 * ```js
 * randomNumber({
 *   minimum: 0,
 *   maximum: 100,
 * });
 * ```
 */
const randomNumber = (
  {
    /** The minimum */
    minimum = 0,
    /** The maximum */
    maximum = 100,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFRandomNumberMinimum: minimum,
    WFRandomNumberMaximum: maximum,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  minimum: WFAction.WFWorkflowActionParameters.WFRandomNumberMinimum,
  maximum: WFAction.WFWorkflowActionParameters.WFRandomNumberMaximum,
});

randomNumber.identifier = identifier;
randomNumber.invert = invert;

export default withActionOutput(randomNumber);
