/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type VibrateDeviceOptions = {};

/**
 * Vibrate Device Action. Vibrates the device for a short amount of time.
 * @param {Object} [options]
 */
const vibrateDevice = (
  {}: VibrateDeviceOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.vibrate',
  WFWorkflowActionParameters: {},
});

export default vibrateDevice;
