import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Prompts to share the input via AirDrop.
 *
 * ```js
 * airDrop();
 * ```
 *
 * @action AirDrop
 * @section Content Types/Sharing/System
 */
const airDrop = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.airdropdocument',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(airDrop);

export const icon = 0;
