/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Dictionary from Input Action. Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz) and XML-based plists are supported.
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
