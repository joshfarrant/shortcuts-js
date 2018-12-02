import AssertionType from '../interfaces/WF/AssertionType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Do Not Disturb Action. Sets DND on and off.
 *
 * ```js
 * setDoNotDisturb({
 *   value: true,
 *   until: 'Time',
 *   tile: '08:00',
 *   event: '',
 * });
 * ```
 */
const setDoNotDisturb = (
  options: {
    /** Enable or disable Do Not Disturb */
    value?: boolean,

    /** Define when Do Not Disturb should be enabled until */
    until?: AssertionType,

    /** Define the time to be used by the "Time" assertion */
    time?: string,

    /** Define the event to be used by the "Event" assertion */
    event?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    value = true,
    until = 'Turned Off',
    time = '08:00',
    event = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
    WFWorkflowActionParameters: {
      Enabled: value,
      AssertionType: until,
      Time: time,
      Event: event,
    },
  };
};

export default setDoNotDisturb;
