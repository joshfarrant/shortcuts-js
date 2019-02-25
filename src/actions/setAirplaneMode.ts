import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: boolean;
}

const identifier = 'is.workflow.actions.airplanemode.set';

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
    /** Enable or disable airplane mode */
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

setAirplaneMode.identifier = identifier;
setAirplaneMode.invert = invert;

export default setAirplaneMode;
