import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: boolean;
}

const identifier = 'is.workflow.actions.bluetooth.set';

/**
 * @action Set Bluetooth
 * @section Actions > Scripting > Device
 * @icon Bluetooth
 *
 * Sets the device’s Bluetooth to on or off.
 *
 * ```js
 * setBluetooth({
 *   value: true,
 * });
 * ```
 */
const setBluetooth = (
  {
    /** Enable or disable Bluetooth */
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

setBluetooth.identifier = identifier;
setBluetooth.invert = invert;

export default setBluetooth;
