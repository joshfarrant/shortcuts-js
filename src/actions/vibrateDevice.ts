import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.vibrate';

/**
 * @action Vibrate Device
 * @section Actions > Scripting > Notification
 * @icon Notification
 *
 * Vibrates the device for a short amount of time.
 *
 * ```js
 * vibrateDevice();
 * ```
 */
const vibrateDevice = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

vibrateDevice.identifier = identifier;
vibrateDevice.invert = invert;

export default vibrateDevice;
