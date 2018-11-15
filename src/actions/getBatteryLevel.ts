/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type GetBatteryLevelOptions = {};

/**
 * Get Battery Level Action. Outputs the percentage of battery remaining as a number from 0 to 100.
 * @param {Object} [options]
 */
const getBatteryLevel = (
  {}: GetBatteryLevelOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getbatterylevel',
  WFWorkflowActionParameters: {},
});

export default getBatteryLevel;
