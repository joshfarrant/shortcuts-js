import WFGetDictionaryValueType from '../interfaces/WF/WFGetDictionaryValueType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  key?: string;
  get?: WFGetDictionaryValueType;
}

const identifier = 'is.workflow.actions.getvalueforkey';

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
    /** The key of the dictionary to get */
    key = '',
    /** The thing to get */
    get = 'Value',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFDictionaryKey: key,
    WFGetDictionaryValueType: get,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  key: WFAction.WFWorkflowActionParameters.WFDictionaryKey,
  get: WFAction.WFWorkflowActionParameters.WFGetDictionaryValueType,
});

getDictionaryValue.identifier = identifier;
getDictionaryValue.invert = invert;

export default getDictionaryValue;
