import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Clear Up Next
 * @section Actions > Music > Up Next
 * @icon Music
 *
 * Clears all the music in your Up Next queue.
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
