import AssertionType from '../interfaces/WF/AssertionType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: boolean;
  until?: AssertionType;
  time?: string;
  event?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.dnd.set';

/**
 * @action Set Do Not Disturb
 * @section Actions > Scripting > Device
 * @icon DoNotDisturb
 *
 * Sets the device’s Do Not Disturb to on or off
 *
 * ```js
 * setDoNotDisturb({
 *   value: true,
 *   until: 'Time',
 *   time: '08:00',
 *   event: '',
 * });
 * ```
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
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    Enabled: value,
    AssertionType: until,
    Time: time,
    Event: event,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  value: WFAction.WFWorkflowActionParameters.Enabled,
  until: WFAction.WFWorkflowActionParameters.AssertionType,
  time: WFAction.WFWorkflowActionParameters.Time,
  event: WFAction.WFWorkflowActionParameters.Event,
});

setDoNotDisturb.identifier = identifier;
setDoNotDisturb.invert = invert;

export default setDoNotDisturb;
