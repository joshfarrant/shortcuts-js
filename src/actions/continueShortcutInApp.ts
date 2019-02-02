import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Continue Shortcut in App
 * @section Actions > Scripting > Control Flow
 * @icon HandoffAction
 *
 * Switches into the Shortcuts app and continues to the next action.
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
