import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getbatterylevel';

import { withActionOutput } from '../utils/withActionOutput';

/**
 * @action Get Battery Level
 * @section Actions > Scripting > Device
 * @icon Battery
 *
 * Outputs the percentage of battery remaining as a number from 0 to 100.
 *
 * ```js
 * getBatteryLevel();
 * ```
 */
const getBatteryLevel = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getBatteryLevel.identifier = identifier;
getBatteryLevel.invert = invert;

export default withActionOutput(getBatteryLevel);
