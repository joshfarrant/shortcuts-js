/** @module actions */

import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type SetVariableOptions = {
  variable: Attachment;
};

/**
 * Set Variable Action. Sets the value of the specified variable to the input of this action.
 * @param {Object} options
 * @param {Variable} options.variable
 */
const setVariable = (
  {
    variable,
  }: SetVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
  WFWorkflowActionParameters: {
    WFVariableName: variable.VariableName,
  },
});

export default setVariable;
