import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Variable Action. Gets the value of the specified variable and passes it to the next action.
 *
 * ```js
 * getVariable({
 *   variable: 'My Variable',
 * });
 * ```
 */
const getVariable = (
  options: {
    /** The variable to get */
    variable: Attachment;
  },
): WFWorkflowAction => {
  const {
    variable,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
    WFWorkflowActionParameters: {
      WFVariable: {
        Value: variable,
        WFSerializationType: 'WFTextTokenAttachment',
      },
    },
  };
};

export default getVariable;
