/** @module actions */

import { withUUID } from '../utils';

import WFInputType from '../interfaces/WF/WFInputType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type AskOptions = {
  inputType?: WFInputType;
  defaultAnswer?: WFSerialization | string;
  question?: WFSerialization | string;
};

/**
 * Ask for Input Action. Displays a dialogue prompting the user to enter a piece of information.
 * @param {Object} options
 * @param {WFInputType} [options.inputType='Text']
 * @param {string} [options.defaultAnswer='']
 * @param {string} [options.question='']
 */
const ask = (
  {
    inputType = 'Text',
    defaultAnswer = '',
    question = '',
  }: AskOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.ask',
  WFWorkflowActionParameters: {
    WFInputType: inputType,
    WFAskActionDefaultAnswer: defaultAnswer,
    WFAskActionPrompt: question,
  },
});

export default withUUID(ask);
