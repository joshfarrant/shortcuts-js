import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Random Number
 * @section Actions > Scripting > Math
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
  options: {
    /** The minimum */
    minimum?: WFSerialization | number,

    /** The maximum */
    maximum?: WFSerialization | number,
  },
): WFWorkflowAction => {
  const {
    minimum = 0,
    maximum = 100,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.number.random',
    WFWorkflowActionParameters: {
      WFRandomNumberMinimum: minimum,
      WFRandomNumberMaximum: maximum,
    },
  };
};

export default withActionOutput(randomNumber);
