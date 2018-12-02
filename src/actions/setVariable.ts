import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Variable Action. Sets the value of the specified variable to the input of this action.
 *
 * ```js
 * setVariable({
 *   variable: variable('My Variable'),
 * });
 * ```
 */
const setVariable = (
  options: {
    /** The variable to set */
    variable: Variable,
  },
): WFWorkflowAction => {
  const {
    variable,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
    WFWorkflowActionParameters: {
      WFVariableName: variable.Value.VariableName,
    },
  };
};

export default setVariable;
