import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Contacts from Input Action. Gets contacts from the result of the previous action.
 *
 * ```js
 * getContactsFromInput();
 * ```
 */

const getContactsFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.contacts',
  WFWorkflowActionParameters: {},
});

export default getContactsFromInput;
