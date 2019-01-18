import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

import WFSerialization from '../interfaces/WF/WFSerialization';

/**
 * Shows the specified text in Siri or in an alert.
 *
 * ```js
 * showResult({
 *   text: 'Hello, world!',
 * });
 * ```
 *
 * @action Show Result
 * @section Actions/Scripting/_
 */
const showResult = (
  options: {
    /** The text to show in the dialogue */
    text?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    text = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.showresult',
    WFWorkflowActionParameters: {
      Text: text,
    },
  };
};

export default showResult;

export const icon = 70;
