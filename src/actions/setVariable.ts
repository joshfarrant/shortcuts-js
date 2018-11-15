/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type SetVariableOptions = {
  name: string;
};

/**
 * Set Variable Action. Sets the value of the specified variable to the input of this action.
 * @param {Object} options
 * @param {string} options.name
 */
const setVariable = (
  {
    name,
  }: SetVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setvariable',
  WFWorkflowActionParameters: {
    WFVariableName: name,
  },
});

export default setVariable;
