import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Email Address from Input Action. Makes a dictionary from the text passed as input.
 *
 * ```js
 * getEmailAddressesFromInput();
 * ```
 */

const getEmailAddressesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.emailaddress',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getEmailAddressesFromInput);
