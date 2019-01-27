import AssertionType from '../interfaces/WF/AssertionType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Sets the device's Do Not Disturb to on or off.
 *
 * ```js
 * setDoNotDisturb({
 *   value: true,
 *   until: 'Time',
 *   time: '08:00',
 *   event: '',
 * });
 * ```
 *
 * @action Set Do Not Disturb
 * @section Actions > Scripting > Device
 * @icon DoNotDisturb
 */
const setDoNotDisturb = (
  {
    /** Enable or disable Do Not Disturb */
    value = true,
    /** Define when Do Not Disturb should be enabled until */
    until = 'Turned Off',
    /** Define the time to be used by the "Time" assertion */
    time = '08:00',
    /** Define the event to be used by the "Event" assertion */
    event = '',
  }: {
    value?: boolean,
    until?: AssertionType,
    time?: string,
    event?: WFSerialization | string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
  WFWorkflowActionParameters: {
    Enabled: value,
    AssertionType: until,
    Time: time,
    Event: event,
  },
});

export default setDoNotDisturb;
