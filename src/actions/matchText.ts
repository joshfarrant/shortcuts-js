import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Match Text
 * @section Content Types > Text > Text Editing
 * @icon Text
 *
 * Searches text passed into the action for matches to a regular expression.
 *
 * ```js
 * matchText({
 *   pattern: '[0-9a-zA-Z]',
 *   caseSensitive: false,
 * });
 * ```
 */

const matchText = (
  {
    pattern = '',
    caseSensitive = false,
  }: {
    /** The pattern to match */
    pattern?: WFSerialization | string,
    /** Whether to be case sensitive **/
    caseSensitive?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.text.match',
  WFWorkflowActionParameters: {
    WFMatchTextPattern: pattern,
    WFMatchTextCaseSensitive: caseSensitive,
  },
});

export default withActionOutput(matchText);
