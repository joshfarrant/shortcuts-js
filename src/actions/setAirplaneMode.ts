import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Airplane Mode
 * @section Actions > Scripting > Device
 * @icon AirplaneMode
 *
 * Sets the device’s Airplane Mode to on or off.
 *
 * ```js
 * setAirplaneMode({
 *   value: true,
 * });
 * ```
 */

const setAirplaneMode = (
  {
    value = true,
  }: {
    /** Enable or disable airplane mode */
    value?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.airplanemode.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setAirplaneMode;
