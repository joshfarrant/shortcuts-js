import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options  {
  pattern?: WFSerialization | string;
  caseSensitive?: boolean;
}

const identifier = 'is.workflow.actions.text.match';

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
    /** The pattern to match */
    pattern = '',
    /** Whether to be case sensitive **/
    caseSensitive = false,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFMatchTextPattern: pattern,
    WFMatchTextCaseSensitive: caseSensitive,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  pattern: WFAction.WFWorkflowActionParameters.WFMatchTextPattern,
  caseSensitive: WFAction.WFWorkflowActionParameters.WFMatchTextCaseSensitive,
});

matchText.identifier = identifier;
matchText.invert = invert;

export default withActionOutput(matchText);
