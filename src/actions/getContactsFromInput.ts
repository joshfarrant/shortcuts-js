import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Contacts from Input
 * @section Content Types > Contacts > Contacts
 * @icon Contacts
 *
 * Gets contacts from the result of the previous action.
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
