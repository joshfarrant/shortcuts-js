/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type WaitOptions = {
  time?: number,
};

/**
 * Wait Action. Waits for the specified number of seconds before continuing with the next action
 * @param {Object} [options]
 * @param {number} [options.time=1]
 */
const wait = (
  {
    time = 1,
  }: WaitOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.delay',
  WFWorkflowActionParameters: {
    WFDelayTime: time,
  },
});

export default wait;
