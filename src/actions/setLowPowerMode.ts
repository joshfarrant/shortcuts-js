import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    value = true,
  }: {
    /** Enable or disable low power mode */
    value?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.lowpowermode.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setLowPowerMode;
