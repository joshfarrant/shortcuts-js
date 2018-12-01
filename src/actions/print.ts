import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set print Action. Prints the input using AirPrint.
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
