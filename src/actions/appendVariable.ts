/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type AppendVariableOptions = {
  name: string;
};

/**
 * Add to Variable Action. Appends this action's input to the specified variable, creating the variable if it does not exist.
 * @param {Object} options
 * @param {string} options.name
 */
const appendVariable = (
  {
    name,
  }: AppendVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
  WFWorkflowActionParameters: {
    WFVariableName: name,
  },
});

export default appendVariable;
