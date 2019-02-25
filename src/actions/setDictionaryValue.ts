import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  key?: string;
  value?: string;
}

const identifier = 'is.workflow.actions.setvalueforkey';

/**
 * @action Set Dictionary Value
 * @section Actions > Scripting > Dictionaries
 * @icon Scripting
 *
 * Sets a value in the dictionary passed into the action.
 *
 * ```js
 * setDictionaryValue({
 *   key: 'testKey',
 *   value: 'testValue',
 * });
 * ```
 */
const setDictionaryValue = (
  {
    /** The key to set */
    key = '',
    /** The value to set */
    value = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFDictionaryKey: key,
    WFDictionaryValue: value,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  key: WFAction.WFWorkflowActionParameters.WFDictionaryKey,
  value: WFAction.WFWorkflowActionParameters.WFDictionaryValue,
});

setDictionaryValue.identifier = identifier;
setDictionaryValue.invert = invert;

export default withActionOutput(setDictionaryValue);
