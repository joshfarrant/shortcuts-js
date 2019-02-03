import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  WFWorkflowActionIdentifier: 'is.workflow.actions.removereminders',
  WFWorkflowActionParameters: {},
});

export default removeReminders;
