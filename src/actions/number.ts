/** @module actions */

import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type NumberOptions = {
  number?: number;
};

/**
 * Number Action. Passes a number to the next action.
 * @param {Object} options
 * @param {number} [options.number=0]
 */
const number = (
  {
    number = 0,
  }: NumberOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.number',
  WFWorkflowActionParameters: {
    WFNumberActionNumber: number,
  },
});

export default withUUID(number);
