/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Continue Shortcut in App Action. Switches into the Shortcuts app and continues to the next action.
 *
 * ```js
 * continueShortcutInApp();
 * ```
 */
const continueShortcutInApp = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.handoff',
  WFWorkflowActionParameters: {},
});

export default continueShortcutInApp;
