/** @module actions */

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

import { testUUID } from '../utils';

type GetVariableOptions = {
  variable: WFSerialization | string;
};

const formatSerialization = (variable: WFSerialization | string): WFSerialization => {
  //  Already serialized
  if (typeof variable !== 'string') {
    return variable;
  }

  // Magic variable
  if (testUUID(variable)) {
    return {
      Value: {
        OutputUUID: variable,
        Type: 'ActionOutput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };
  }

  // Static variable
  return {
    Value: {
      Type: 'Variable',
      VariableName: variable,
    },
    WFSerializationType: 'WFTextTokenAttachment',
  };
};

/**
 * Get Variable Action. Gets the value of the specified variable and passes it to the next action.
 * @param {Object} options
 * @param {string} options.variable
 */
const getVariable = (
  {
    variable,
  }: GetVariableOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
  WFWorkflowActionParameters: {
    WFVariable: formatSerialization(variable),
  },
});

export default getVariable;
