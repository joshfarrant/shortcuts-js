import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.previewdocument';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

quickLook.identifier = identifier;
quickLook.invert = invert;

export default withActionOutput(quickLook);
