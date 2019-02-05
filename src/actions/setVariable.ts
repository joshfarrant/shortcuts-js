import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Variable
 * @section Actions > Scripting > Variables
 * @icon Variable
 *
 * Sets the value of the specified variable to the input of this action.
 *
 * ```js
 * setVariable({
 *   variable: variable('My Variable'),
 * });
 * ```
 */

const setVariable = (
  {
    variable,
  }: {
    /** The variable to set */
    variable: Variable,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
  WFWorkflowActionParameters: {
    ...(variable ? { WFVariableName: variable.Value.VariableName } : {}),
  },
});

export default setVariable;
