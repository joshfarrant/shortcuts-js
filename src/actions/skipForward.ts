/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Skip Forward Action. Skips to the next song in the current music queue.
 *
 * ```js
 *  skipForward();
 * ```
 */

const skipForward = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.skipforward',
  WFWorkflowActionParameters: {},
});

export default skipForward;
