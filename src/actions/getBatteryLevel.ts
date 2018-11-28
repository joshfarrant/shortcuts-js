import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

import { withActionOutput } from '../utils';

/**
 * Get Battery Level Action. Outputs the percentage of battery remaining as a number from 0 to 100.
 *
 * ```js
 * getBatteryLevel();
 * ```
 */
const getBatteryLevel = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getbatterylevel',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getBatteryLevel);
