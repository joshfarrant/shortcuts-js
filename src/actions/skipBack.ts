import WFSkipBackBehavior from '../interfaces/WF/WFSkipBackBehavior';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Skip Back Action. Skips to the previous song in the current music queue.
 *
 * ```js
 *  skipBack({
 *  	skipBackBehavior: 'Beginning',
 *  });
 * ```
 */

const skipBack = (
  options: {
    /** The skip back behavior option to get (Beginning or Previous Song) */
    skipBackBehavior ?: WFSkipBackBehavior,
  },
): WFWorkflowAction => {
  const {
    skipBackBehavior = 'Beginning',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.skipback',
    WFWorkflowActionParameters: {
      WFSkipBackBehavior: skipBackBehavior,
    },
  };
};

export default skipBack;
