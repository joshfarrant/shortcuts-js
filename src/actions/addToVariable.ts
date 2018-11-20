/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type AddToVariableOptions = {
  name: string;
};

/**
 * Add to Variable Action. Appends this action's input to the specified variable, creating the variable if it does not exist.
 * @param {Object} options
 * @param {string} options.name
 */
const addToVariable = (
  {
    name,
  }: AddToVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
  WFWorkflowActionParameters: {
    WFVariableName: name,
  },
});

export default addToVariable;
