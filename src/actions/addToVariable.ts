/** @module actions */

import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type AddToVariableOptions = {
  variable: Attachment;
};

/**
 * Add to Variable Action. Appends this action's input to the specified variable, creating the variable if it does not exist.
 * @param {Object} options
 * @param {Variable} options.variable
 */
const addToVariable = (
  {
    variable,
  }: AddToVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.appendvariable',
  WFWorkflowActionParameters: {
    WFVariableName: variable.VariableName,
  },
});

export default addToVariable;
