import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Wait
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Waits for the specified number of seconds before continuing with the next action.
 *
 * ```js
 * wait({
 *   time: 19,
 * });
 * ```
 */

const wait = (
  {
    time = 1,
  }: {
    /** The number of seconds to wait */
    time?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.delay',
  WFWorkflowActionParameters: {
    WFDelayTime: time,
  },
});

export default wait;
