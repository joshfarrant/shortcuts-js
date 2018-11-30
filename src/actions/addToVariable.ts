import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Add to Variable Action. Appends this action's input to the specified variable, creating the variable if it does not exist.
 *
 * ```js
 * // Append the input to the variable named 'My Var'
 * addToVariable({
 *   variable: variable('My Var'),
 * });
 * ```
 */
const addToVariable = (
  /** The variable to add to */
  options: {
    variable: Attachment;
  },
): WFWorkflowAction => {
  const {
    variable,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
    WFWorkflowActionParameters: {
      WFVariableName: variable.VariableName,
    },
  };
};

export default addToVariable;
