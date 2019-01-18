/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Vibrate Device Action. Vibrates the device for a short amount of time.
 *
 * ```js
 * vibrateDevice();
 * ```
 */
const vibrateDevice = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.vibrate',
  WFWorkflowActionParameters: {},
});

export default vibrateDevice;
