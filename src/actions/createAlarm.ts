import WFFrequency from '../interfaces/WF/WFFrequency';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Create alarm action. Creates an alarm in the Clock app.
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
  options: {
    /** The alarm label */
    label?: WFSerialization | string,

    /** The alarm time */
    time?: WFSerialization | string,

    /** Whether the alarm should repeat on certain days */
    repeat?: WFFrequency[],
  },
): WFWorkflowAction => {
  const {
    label = '',
    time = '',
    repeat = [],
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.alarm.create',
    WFWorkflowActionParameters: {
      WFLabel: label,
      WFTime: time,
      WFFrequency: repeat,
    },
  };
};

export default createAlarm;
