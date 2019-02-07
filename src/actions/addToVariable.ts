import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  /** The variable to add to */
  variable: Variable;
}

export const identifier = 'is.workflow.actions.appendvariable';

/**
 * @action Add to Variable
 * @section Actions > Scripting > Variables
 * @icon Variable
 *
 * Appends this action's input to the specified variable, creating the variable if it does not exist. This allows you to make a variable hold multiple items.
 *
 * ```js
 * // Append the input to the variable named 'My Var'
 * addToVariable({
 *   variable: variable('My Var'),
 * });
 * ```
 */
const addToVariable = (
  {
    variable,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    ...(variable ? { WFVariableName: variable.Value.VariableName } : {}),
  },
});

export default addToVariable;
