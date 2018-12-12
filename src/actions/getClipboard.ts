import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Clipboard Action. Passes the contents of the clipboard to the next action.
 *
 * ```js
 * getClipboard();
 * ```
 */

const getClipboard = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getclipboard',
  WFWorkflowActionParameters: {},
});

export default getClipboard;
