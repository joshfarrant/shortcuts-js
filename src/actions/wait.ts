import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  time?: number;
}

const identifier = 'is.workflow.actions.delay';

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
    /** The number of seconds to wait */
    time = 1,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFDelayTime: time,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  time: WFAction.WFWorkflowActionParameters.WFDelayTime,
});

wait.identifier = identifier;
wait.invert = invert;

export default wait;
