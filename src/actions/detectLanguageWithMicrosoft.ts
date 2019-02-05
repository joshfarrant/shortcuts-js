import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Detect Language with Microsoft
 * @section Content Types > Text >
 * @icon Translate
 *
 * Detects the language of the text provided as input.
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
