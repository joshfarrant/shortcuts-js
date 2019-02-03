import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    minimum = 0,
    maximum = 100,
  }: {
    /** The minimum */
    minimum?: WFSerialization | number,
    /** The maximum */
    maximum?: WFSerialization | number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.number.random',
  WFWorkflowActionParameters: {
    WFRandomNumberMinimum: minimum,
    WFRandomNumberMaximum: maximum,
  },
});

export default withActionOutput(randomNumber);
