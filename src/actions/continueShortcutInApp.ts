/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type ContinueShortcutInAppOptions = {};

/**
 * Continue Shortcut in App Action. Switches into the Shortcuts app and continues to the next action.
 * @param {Object} [options]
 */
const continueShortcutInApp = (
  {}: ContinueShortcutInAppOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.handoff',
  WFWorkflowActionParameters: {},
});

export default continueShortcutInApp;
