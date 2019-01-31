import WFFrequency from '../interfaces/WF/WFFrequency';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Creates an alarm in the Clock app.
 *
 * ```js
 * createAlarm({
 *   label: 'Alarm',
 *   time: '8 AM',
 *   repeat: ['Sunday', 'Saturday'],
 * });
 * ```
 *
 * @action Create Alarm
 * @section Content Types > Calendar > Clock
 * @icon Clock
 */
const createAlarm = (
  {
    /** The alarm label */
    label = '',
    /** The alarm time */
    time = '',
    /** Whether the alarm should repeat on certain days */
    repeat = [],
  }: {
    label?: WFSerialization | string,
    time?: WFSerialization | string,
    repeat?: WFFrequency[],
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.alarm.create',
  WFWorkflowActionParameters: {
    WFLabel: label,
    WFTime: time,
    WFFrequency: repeat,
  },
});

export default createAlarm;
