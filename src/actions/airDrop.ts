import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const identifier = 'is.workflow.actions.airdropdocument';

/**
 * @action AirDrop
 * @section Content Types > Sharing > System
 * @icon AirDrop
 *
 * Prompts to share the input via AirDrop.
 *
 * ```js
 * airDrop();
 * ```
 */
const airDrop = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

export default withActionOutput(airDrop);
