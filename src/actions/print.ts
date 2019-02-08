import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Print
 * @section Content Types > Documents > Printing
 * @icon Print
 *
 * Prints the input using AirPrint.
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
