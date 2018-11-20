/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type VibrateOptions = {};

/**
 * Vibrate Action. Vibrates the device for a short amount of time.
 * @param {Object} [options]
 */
const vibrate = (
  {}: VibrateOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.vibrate',
  WFWorkflowActionParameters: {},
});

export default vibrate;
