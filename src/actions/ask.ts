import { withActionOutput } from '../utils/withActionOutput';

import WFInputType from '../interfaces/WF/WFInputType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  inputType?: WFInputType;
  defaultAnswer?: WFSerialization | string;
  question?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.ask';

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
    /** The type of input to accept */
    inputType = 'Text',
    /** The default answer */
    defaultAnswer = '',
    /** The title of the dialogue */
    question = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFInputType: inputType,
    WFAskActionDefaultAnswer: defaultAnswer,
    WFAskActionPrompt: question,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  inputType: WFAction.WFWorkflowActionParameters.WFInputType,
  defaultAnswer: WFAction.WFWorkflowActionParameters.WFAskActionDefaultAnswer,
  question: WFAction.WFWorkflowActionParameters.WFAskActionPrompt,
});

ask.identifier = identifier;
ask.invert = invert;

export default withActionOutput(ask);
