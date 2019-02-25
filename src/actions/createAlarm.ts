import WFFrequency from '../interfaces/WF/WFFrequency';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  label?: WFSerialization | string;
  time?: WFSerialization | string;
  repeat?: WFFrequency[];
}

const identifier = 'is.workflow.actions.alarm.create';

/**
 * @action Create Alarm
 * @section Content Types > Calendar > Clock
 * @icon Clock
 *
 * Creates an alarm in the Clock app.
 *
 * ```js
 * createAlarm({
 *   label: 'Alarm',
 *   time: '8 AM',
 *   repeat: ['Sunday', 'Saturday'],
 * });
 * ```
 */
const createAlarm = (
  {
    /** The alarm label */
    label = '',
    /** The alarm time */
    time = '',
    /** Whether the alarm should repeat on certain days */
    repeat = [],
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFLabel: label,
    WFTime: time,
    WFFrequency: repeat,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  label: WFAction.WFWorkflowActionParameters.WFLabel,
  time: WFAction.WFWorkflowActionParameters.WFTime,
  repeat: WFAction.WFWorkflowActionParameters.WFFrequency,
});

createAlarm.identifier = identifier;
createAlarm.invert = invert;

export default createAlarm;
