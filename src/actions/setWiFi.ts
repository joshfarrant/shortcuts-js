import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Wi-Fi
 * @section Actions > Scripting > Device
 * @icon Wi-Fi
 *
 * Sets the device’s Wi-Fi to on or off.
 *
 * ```js
 * setWiFi({
 *   value: true,
 * });
 * ```
 */

const setWiFi = (
  {
    value = true,
  }: {
    /** Enable or disable Wi-Fi */
    value?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.wifi.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setWiFi;
