import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set quickLook Action. Displays a preview of the input.
 *
 * ```js
 * quickLook();
 * ```
 */
const quickLook = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.previewdocument',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(quickLook);
