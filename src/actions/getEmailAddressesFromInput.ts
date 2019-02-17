import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.emailaddress';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getEmailAddressesFromInput.identifier = identifier;
getEmailAddressesFromInput.invert = invert;

export default withActionOutput(getEmailAddressesFromInput);
