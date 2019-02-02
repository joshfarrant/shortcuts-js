import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Phone Numbers from Input
 * @section Actions > Contacts > Phone
 * @icon PhoneNumber
 *
 * Returns any phone numbers found in the output from the previous action.
 *
 * ```js
 * getPhoneNumbersFromInput();
 * ```
 */

const getPhoneNumbersFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.phonenumber',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getPhoneNumbersFromInput);
