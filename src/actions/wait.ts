import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Wait Action. Waits for the specified number of seconds before continuing with the next action
 *
 * ```js
 * wait({
 *   time: 19,
 * });
 * ```
 */
const wait = (
  options: {
    /** The number of seconds to wait */
    time?: number,
  },
): WFWorkflowAction => {
  const {
    time = 1,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.delay',
    WFWorkflowActionParameters: {
      WFDelayTime: time,
    },
  };
};

export default wait;
