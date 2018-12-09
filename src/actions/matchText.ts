import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Match Text Action. Searches text passed into the action for matches to a regular expression.
 *
 * ```js
 * matchText({
 *   text: '[0-9a-zA-Z]',
 *   value: false
 * });
 * ```
 */
const matchText = (
  options: {
    /** The text to set */
    text?: WFSerialization | string,

    /** Whether to be case sensitive **/
    value?: boolean,
  },
): WFWorkflowAction => {
  const {
    text = '',
    value = false,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
    WFWorkflowActionParameters: {
      WFMatchTextPattern: text,
      WFMatchTextCaseSensitive: value,
    },
  };
};

export default withActionOutput(matchText);
