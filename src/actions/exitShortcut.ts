import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Exit Shortcut Action. Stops execution of the current shortcut and dismisses the shortcut onscreen. No more actions will be run after this action.
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
