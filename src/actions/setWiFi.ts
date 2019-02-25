import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: boolean;
}

const identifier = 'is.workflow.actions.wifi.set';

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
    /** Enable or disable Wi-Fi */
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

setWiFi.identifier = identifier;
setWiFi.invert = invert;

export default setWiFi;
