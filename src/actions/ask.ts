import { withUUID } from '../utils';

import WFInputType from '../interfaces/WF/WFInputType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Ask for Input Action. Displays a dialogue prompting the user to enter a piece of information.
 */
const ask = (
  options: {
    inputType?: WFInputType;
    defaultAnswer?: WFSerialization | string;
    question?: WFSerialization | string;
  },
): WFWorkflowAction => {
  const {
    inputType = 'Text',
    defaultAnswer = '',
    question = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.ask',
    WFWorkflowActionParameters: {
      WFInputType: inputType,
      WFAskActionDefaultAnswer: defaultAnswer,
      WFAskActionPrompt: question,
    },
  };
};

export default withUUID(ask);
