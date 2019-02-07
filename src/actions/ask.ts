import { withActionOutput } from '../utils/withActionOutput';

import WFInputType from '../interfaces/WF/WFInputType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const identifier = 'is.workflow.actions.ask';

/**
 * @action Ask for Input
 * @section Actions > Scripting > Notification
 * @icon Scripting
 *
 * Displays a dialog prompting the user to enter a piece of information.
 *
 * ```js
 * // Ask for favourite colour, defaulting to pink
 * ask({
 *   defaultAnswer: 'Pink',
 *   question: 'What is your favourite colour?',
 * });
 * ```
 */
const ask = (
  {
    inputType = 'Text',
    defaultAnswer = '',
    question = '',
  }: {
    /** The type of input to accept */
    inputType?: WFInputType;
    /** The default answer */
    defaultAnswer?: WFSerialization | string;
    /** The title of the dialogue */
    question?: WFSerialization | string;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFInputType: inputType,
    WFAskActionDefaultAnswer: defaultAnswer,
    WFAskActionPrompt: question,
  },
});

export default withActionOutput(ask);
