import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Variable Action. Sets the value of the specified variable to the input of this action.
 *
 * ```js
 * setVariable({
 *   name: 'My Variable',
 * });
 * ```
 */
const setVariable = (
  options: {
    /** The name of the variable to set */
    variable: Attachment,
  },
): WFWorkflowAction => {
  const {
    variable,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
    WFWorkflowActionParameters: {
      WFVariableName: variable.VariableName,
    },
  };
};

export default setVariable;
