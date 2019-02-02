import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Skip Forward
 * @section Actions > Music > Playback
 * @icon FastForward
 *
 * Skips to the next song in the current music queue.
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
