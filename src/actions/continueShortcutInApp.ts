import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.handoff';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

continueShortcutInApp.identifier = identifier;
continueShortcutInApp.invert = invert;

export default continueShortcutInApp;
