import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  WFWorkflowActionIdentifier: 'is.workflow.actions.exit',
  WFWorkflowActionParameters: {},
});

export default exitShortcut;
