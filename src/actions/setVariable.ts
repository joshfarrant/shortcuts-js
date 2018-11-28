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
    name: string,
  },
): WFWorkflowAction => {
  const {
    name,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
    WFWorkflowActionParameters: {
      WFVariableName: name,
    },
  };
};

export default setVariable;
