import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Clear Up Next Action. Clears all the music in your Up Next queue.
 *
 * ```js
 * clearUpNext();
 * ```
 */

const clearUpNext = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.clearupnext',
  WFWorkflowActionParameters: {},
});

export default clearUpNext;
