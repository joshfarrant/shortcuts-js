import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.skipforward';

/**
 * @action Skip Forward
 * @section Content Types > Music > Playback
 * @icon FastForward
 *
 * Skips to the next song in the current music queue.
 *
 * ```js
 *  skipForward();
 * ```
 */
const skipForward = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

skipForward.identifier = identifier;
skipForward.invert = invert;

export default skipForward;
