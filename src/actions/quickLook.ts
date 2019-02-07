import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Quick Look
 * @section Content Types > Documents > Previewing
 * @icon QuickLook
 *
 * Displays a preview of the input.
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
