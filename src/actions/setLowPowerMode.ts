import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: boolean;
}

const identifier = 'is.workflow.actions.lowpowermode.set';

/**
 * @action Set Low Power Mode
 * @section Actions > Scripting > Device
 * @icon Battery
 *
 * Sets the device’s Low Power Mode to on or off.
 *
 * ```js
 * setLowPowerMode({
 *   value: false,
 * });
 * ```
 */
const setLowPowerMode = (
  {
    /** Enable or disable low power mode */
    value = true,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  value: WFAction.WFWorkflowActionParameters.OnValue,
});

setLowPowerMode.identifier = identifier;
setLowPowerMode.invert = invert;

export default setLowPowerMode;
