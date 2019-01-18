/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Remove Reminders Action. Removes all reminders passed into the action from the lists they are contained in.
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
