import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Select Phone Number
 * @section Actions > Contacts > Phone
 * @icon PhoneNumber
 *
 * Prompts to pick a phone number from your contacts and passes the selection to the next action.
 *
 * ```js
 * selectPhoneNumber();
 * ```
 */

const selectPhoneNumber = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.selectphone',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(selectPhoneNumber);
