import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detectlanguage';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

detectLanguageWithMicrosoft.identifier = identifier;
detectLanguageWithMicrosoft.invert = invert;

export default withActionOutput(detectLanguageWithMicrosoft);
