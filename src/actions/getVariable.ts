/** @module actions */

import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type GetVariableOptions = {
  variable: Attachment;
};

/**
 * Get Variable Action. Gets the value of the specified variable and passes it to the next action.
 * @param {Object} options
 * @param {(Variable|ActionOutput)} options.variable
 */
const getVariable = (
  {
    variable,
  }: GetVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
  WFWorkflowActionParameters: {
    WFVariable: {
      Value: variable,
      WFSerializationType: 'WFTextTokenAttachment',
    },
  },
});

export default getVariable;
