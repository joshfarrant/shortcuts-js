import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.selectphone';

/**
 * @action Select Phone Number
 * @section Content Types > Contacts > Phone
 * @icon PhoneNumber
 *
 * Prompts to pick a phone number from your contacts and passes the selection to the next action.
 *
 * ```js
 * selectPhoneNumber();
 * ```
 */
const selectPhoneNumber = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

selectPhoneNumber.identifier = identifier;
selectPhoneNumber.invert = invert;

export default withActionOutput(selectPhoneNumber);
