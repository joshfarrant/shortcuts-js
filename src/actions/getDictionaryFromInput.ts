import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Dictionary from Input
 * @section Actions > Scripting > Dictionaries
 * @icon Scripting
 *
 * Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.
 *
 * ```js
 * getDictionaryFromInput();
 * ```
 */

const getDictionaryFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.dictionary',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getDictionaryFromInput);
