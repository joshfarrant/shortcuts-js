/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type ExitShortcutOptions = {};

/**
 * Exit Shortcut Action. Stops execution of the current shortcut and dismisses the shortcut onscreen. No more actions will be run after this action.
 * @param {Object} [options]
 */
const exitShortcut = (
  {}: ExitShortcutOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.exit',
  WFWorkflowActionParameters: {},
});

export default exitShortcut;
