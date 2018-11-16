/** @module actions */

import WFGetDictionaryValueType from '../interfaces/WF/WFGetDictionaryValueType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type GetDictionaryValueOptions = {
  key?: string,
  get?: WFGetDictionaryValueType,
};

/**
 * Get Dictionary Value Action. Gets the value for the specified key in the dictionary passed into the action.
 * @param {Object} [options]
 * @param {string} [options.key='']
 * @param {string} [options.get='Value']
 */
const getDictionaryValue = (
  {
    key = '',
    get = 'Value',
  }: GetDictionaryValueOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getvalueforkey',
  WFWorkflowActionParameters: {
    WFDictionaryKey: key,
    WFGetDictionaryValueType: get,
  },
});

export default getDictionaryValue;
