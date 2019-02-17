import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.exit';

/**
 * @action Exit Shortcut
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.
 *
 * ```js
 * exitShortcut();
 * ```
 */
const exitShortcut = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

exitShortcut.identifier = identifier;
exitShortcut.invert = invert;

export default exitShortcut;
