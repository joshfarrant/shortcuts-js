import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Email Addresses from Input
 * @section Content Types > Contacts > Mail
 * @icon Mail
 *
 * Returns any email addresses found in the output from the previous action.
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
