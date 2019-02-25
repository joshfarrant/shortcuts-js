import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  text?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.gettext';

/**
 * @action Text
 * @section Content Types > Text >
 * @icon Text
 *
 * Passes the specified text to the next action.
 *
 * ```js
 * text({
 *   text: 'Some lovely text!',
 * });
 * ```
 */
const text = (
  {
    /** The text to set */
    text = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFTextActionText: text,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  text: WFAction.WFWorkflowActionParameters.WFTextActionText,
});

text.identifier = identifier;
text.invert = invert;

export default withActionOutput(text);
