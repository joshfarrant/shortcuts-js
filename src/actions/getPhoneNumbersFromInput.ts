import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.phonenumber';

/**
 * @action Get Phone Numbers from Input
 * @section Content Types > Contacts > Phone
 * @icon PhoneNumber
 *
 * Returns any phone numbers found in the output from the previous action.
 *
 * ```js
 * getPhoneNumbersFromInput();
 * ```
 */
const getPhoneNumbersFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getPhoneNumbersFromInput.identifier = identifier;
getPhoneNumbersFromInput.invert = invert;

export default withActionOutput(getPhoneNumbersFromInput);
