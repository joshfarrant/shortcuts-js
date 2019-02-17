import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getclipboard';

/**
 * @action Get Clipboard
 * @section Content Types > Sharing > Clipboard
 * @icon Clipboard
 *
 * Passes the contents of the clipboard to the next action.
 *
 * ```js
 * getClipboard();
 * ```
 */
const getClipboard = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getClipboard.identifier = identifier;
getClipboard.invert = invert;

export default getClipboard;
