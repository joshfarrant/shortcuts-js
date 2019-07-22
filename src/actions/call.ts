import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Call
 * @section Content Types > Contacts > Phone
 * @icon PhoneNumber
 *
 * Call the contact, the text, place or phone number given as input.
 *
 * ```js
 * call();
 * ```
 */

const call = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.apple.mobilephone.call',
  WFWorkflowActionParameters: {},
});

export default call;
