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
  options: {
    /** Enable or disable Bluetooth */
    value?: boolean,
  },
): WFWorkflowAction => {
  const {
    value = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.bluetooth.set',
    WFWorkflowActionParameters: {
      OnValue: value,
    },
  };
};

export default setBluetooth;
