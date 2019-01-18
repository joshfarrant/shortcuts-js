/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Print Action. Prints the input using AirPrint.
 *
 * ```js
 * print();
 * ```
 */
const print = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.print',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(print);
