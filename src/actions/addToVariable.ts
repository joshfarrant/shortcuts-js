import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Appends this action's input to the specified variable, creating the variable if it does not exist.
 *
 * ```js
 * // Append the input to the variable named 'My Var'
 * addToVariable({
 *   variable: variable('My Var'),
 * });
 * ```
 *
 * @action Add to Variable
 * @section Actions/Scripting/Variables
 */
const addToVariable = (
  /** The variable to add to */
  options: {
    variable: Variable;
  },
): WFWorkflowAction => {
  const {
    variable,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
    WFWorkflowActionParameters: {
      WFVariableName: variable.Value.VariableName,
    },
  };
};

export default addToVariable;

export const icon = 86;
