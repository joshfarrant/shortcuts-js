import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Dictionary from Inpuit Action. Makes a dictionary from the text passed as input.
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
