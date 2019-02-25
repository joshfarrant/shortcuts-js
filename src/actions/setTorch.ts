import WFFlashlightSetting from '../interfaces/WF/WFFlashlightSetting';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  setting?: WFFlashlightSetting;
}

const identifier = 'is.workflow.actions.flashlight';

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
  {
    /** The state to set for the torch */
    setting = 'On',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFFlashlightSetting: setting,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  setting: WFAction.WFWorkflowActionParameters.WFFlashlightSetting,
});

setTorch.identifier = identifier;
setTorch.invert = invert;

export default setTorch;
