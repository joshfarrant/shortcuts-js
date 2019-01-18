/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Number Action. Passes a number to the next action.
 *
 * ```js
 * number({
 *   number: 7,
 * });
 * ```
 */
const number = (
  options: {
    /** The number to set */
    number?: number;
  },
): WFWorkflowAction => {
  const {
    number = 0,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.number',
    WFWorkflowActionParameters: {
      WFNumberActionNumber: number,
    },
  };
};

export default withActionOutput(number);
