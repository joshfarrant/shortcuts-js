import WFGetDictionaryValueType from '../interfaces/WF/WFGetDictionaryValueType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Dictionary Value
 * @section Actions > Scripting > Dictionaries
 * @icon Scripting
 *
 * Gets the value for the specified key in the dictionary passed into the action.
 *
 * ```js
 * getDictionaryValue({
 *   get: 'Value',
 *   key: 'My Key',
 * });
 * ```
 */

const getDictionaryValue = (
  {
    key = '',
    get = 'Value',
  }: {
    /** The key of the dictionary to get */
    key?: string,
    /** The thing to get */
    get?: WFGetDictionaryValueType,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getvalueforkey',
  WFWorkflowActionParameters: {
    WFDictionaryKey: key,
    WFGetDictionaryValueType: get,
  },
});

export default getDictionaryValue;
