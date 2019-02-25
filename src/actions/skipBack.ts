import WFSkipBackBehavior from '../interfaces/WF/WFSkipBackBehavior';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  skipBackBehavior ?: WFSkipBackBehavior;
}

const identifier = 'is.workflow.actions.skipback';

/**
 * @action Skip Back
 * @section Content Types > Music > Playback
 * @icon Rewind
 *
 * Skips to the previous song in the current music queue.
 *
 * ```js
 *  skipBack({
 *  	skipBackBehavior: 'Beginning',
 *  });
 * ```
 */
const skipBack = (
  {
    /** The skip back behavior option to get (Beginning or Previous Song) */
    skipBackBehavior = 'Beginning',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFSkipBackBehavior: skipBackBehavior,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  skipBackBehavior: WFAction.WFWorkflowActionParameters.WFSkipBackBehavior,
});

skipBack.identifier = identifier;
skipBack.invert = invert;

export default skipBack;
