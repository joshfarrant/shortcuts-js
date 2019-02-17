import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.removereminders';

/**
 * @action Remove Reminders
 * @section Content Types > Calendar > Reminders
 * @icon Reminders
 *
 * Removes all reminders passed into the action from the lists they are contained in.
 *
 * ```js
 * removeReminders();
 * ```
 */
const removeReminders = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

removeReminders.identifier = identifier;
removeReminders.invert = invert;

export default removeReminders;
