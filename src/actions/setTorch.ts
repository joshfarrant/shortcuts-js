import WFFlashlightSetting from '../interfaces/WF/WFFlashlightSetting';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Flashlight
 * @section Actions > Scripting > Device
 * @icon Flashlight
 *
 * Turns on or off the flashlight near the device's camera.
 *
 * ```js
 * setTorch({
 *   setting: 'Off',
 * });
 * ```
 */

const setTorch = (
  options: {
    /** The state to set for the torch */
    setting?: WFFlashlightSetting,
  },
): WFWorkflowAction => {
  const {
    setting = 'On',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.flashlight',
    WFWorkflowActionParameters: {
      WFFlashlightSetting: setting,
    },
  };
};

export default setTorch;
