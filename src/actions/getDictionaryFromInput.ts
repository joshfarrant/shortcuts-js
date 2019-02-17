import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.dictionary';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getDictionaryFromInput.identifier = identifier;
getDictionaryFromInput.invert = invert;

export default withActionOutput(getDictionaryFromInput);
