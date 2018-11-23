import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Add to Variable Action. Appends this action's input to the specified variable, creating the variable if it does not exist.
 *
 * ```js
 * // Append the input to the variable 'My Var'
 * addToVariable({
 *   name: 'My Var',
 * });
 * ```
 */
const addToVariable = (
  options: {
    /** The name of the variable */
    name: string;
  },
): WFWorkflowAction => {
  const {
    name,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
    WFWorkflowActionParameters: {
      WFVariableName: name,
    },
  };
};

export default addToVariable;
