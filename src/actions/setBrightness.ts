/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type SetBrightnessOptions = {
  brightness?: number,
};

/**
 * Set Brightness Action. Sets the device brightness.
 * @param {Object} [options]
 * @param {number} [options.brightness=100]
 */
const setBrightness = (
  {
    brightness = 100,
  }: SetBrightnessOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setbrightness',
  WFWorkflowActionParameters: {
    WFBrightness: brightness,
  },
});

export default setBrightness;
