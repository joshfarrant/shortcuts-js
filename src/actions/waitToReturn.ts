/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type WaitToReturnOptions = {};

/**
 * Wait to Return Action. Pauses execution until you leave the Shortcuts app and return to it.
 * @param {Object} [options]
 */
const waitToReturn = (
  {}: WaitToReturnOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.waittoreturn',
  WFWorkflowActionParameters: {},
});

export default waitToReturn;
