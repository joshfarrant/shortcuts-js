import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Email Addesses from Input Action. Returns any email addresses found in the output from the previous action.
 *
 * ```js
 * getEmailAddressesFromInput();
 * ```
 */

const getEmailAddressesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.emailaddress',
  WFWorkflowActionParameters: {},
});

export default getEmailAddressesFromInput;
