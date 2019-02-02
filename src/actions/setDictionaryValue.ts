import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  options: {
    /** The key to set */
    key?: string,
    /** The value to set */
    value?: string,
  },
): WFWorkflowAction => {
  const {
    key = '',
    value = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvalueforkey',
    WFWorkflowActionParameters: {
      WFDictionaryKey: key,
      WFDictionaryValue: value,
    },
  };
};

export default withActionOutput(setDictionaryValue);
