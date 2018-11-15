/** @module actions */

import WFFlashlightSetting from '../interfaces/WF/WFFlashlightSetting';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type FlashlightOptions = {
  setting?: WFFlashlightSetting;
};

/**
 * Set Torch Action. Turns on or off the torch near the device's camera.
 * @param {Object} [options]
 * @param {WFFlashlightSetting} [options.setting='On']
 */
const setTorch = (
  {
    setting = 'On',
  }: FlashlightOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.flashlight',
  WFWorkflowActionParameters: {
    WFFlashlightSetting: setting,
  },
});

export default setTorch;
