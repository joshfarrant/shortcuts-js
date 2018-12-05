import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Prompts to share the input via AirDrop.
 *
 * ```js
 * airDrop();
 * ```
 */
const airDrop = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.airdropdocument',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(airDrop);
