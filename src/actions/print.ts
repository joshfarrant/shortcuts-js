import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.print';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

print.identifier = identifier;
print.invert = invert;

export default withActionOutput(print);
