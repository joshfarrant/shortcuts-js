/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Dates from Input Action. Returns any dates found in the output from the previous action.
 *
 * ```js
 * getDatesFromInput();
 * ```
 */
const getDatesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.date',
  WFWorkflowActionParameters: {},
});

export default getDatesFromInput;
