import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    text = '',
  }: {
    /** The text to set */
    text?: WFSerialization | string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.gettext',
  WFWorkflowActionParameters: {
    WFTextActionText: text,
  },
});

export default withActionOutput(text);
