import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Replace Text
 * @section Content Types > Text > Text Editing
 * @icon Text
 *
 * Replaces some text passed into the action with other text.
 *
 * ```js
 * replaceText({
 *   findText: '',
 *   replaceWith: '',
 *   caseSensitive: false,
 *   regularExpression: false,
 * });
 * ```
 */

const replaceText = (
  {
    findText = '',
    replaceWith = '',
    caseSensitive = false,
    regularExpression = false,
  }: {
    /** The text to be replaced */
    findText?: WFSerialization | string,
    /** The text to replace all occurrences of Find Text */
    replaceWith?: WFSerialization | string,
    /** Whether to be case sensitive **/
    caseSensitive?: boolean,
    /** When enabled, Find Text is treated as a regular expression. */
    regularExpression?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.text.replace',
  WFWorkflowActionParameters: {
    WFReplaceTextFind: findText,
    WFReplaceTextReplace: replaceWith,
    WFReplaceTextCaseSensitive: caseSensitive,
    WFReplaceTextRegularExpression: regularExpression,
  },
});

export default withActionOutput(replaceText);
