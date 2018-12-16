import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Match Text Action. Searches text passed into the action for matches to a regular expression.
 *
 * ```js
 * matchText({
 *   pattern: '[0-9a-zA-Z]',
 *   caseSensitive: false,
 * });
 * ```
 */
const matchText = (
  options: {
    /** The pattern to match */
    pattern?: WFSerialization | string,

    /** Whether to be case sensitive **/
    caseSensitive?: boolean,
  },
): WFWorkflowAction => {
  const {
    pattern = '',
    caseSensitive = false,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
    WFWorkflowActionParameters: {
      WFMatchTextPattern: pattern,
      WFMatchTextCaseSensitive: caseSensitive,
    },
  };
};

export default withActionOutput(matchText);
