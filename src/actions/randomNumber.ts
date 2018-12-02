import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Random Number Action. Returns a random number between a min and max.
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
