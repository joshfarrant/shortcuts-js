import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.contacts';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getContactsFromInput.identifier = identifier;
getContactsFromInput.invert = invert;

export default getContactsFromInput;
