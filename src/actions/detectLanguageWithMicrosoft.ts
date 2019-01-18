/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Detect Language with Microsoft Action. Detects the language of the text provided as input.
 *
 * ```js
 * detectLanguageWithMicrosoft();
 * ```
 */

const detectLanguageWithMicrosoft = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detectlanguage',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(detectLanguageWithMicrosoft);
