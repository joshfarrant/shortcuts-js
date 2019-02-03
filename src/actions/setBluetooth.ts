import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    value = true,
  }: {
    /** Enable or disable Bluetooth */
    value?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.bluetooth.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setBluetooth;
