import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Latest Videos. Gets the most recent videos from the camera roll.
 *
 * ```js
 * getLatestVideos({
 *   count: 1,
 * });
 * ```
 */
const getLatestVideos = (
  options: {
    /** The number of videos to get */
    count?: number,
  },
): WFWorkflowAction => {
  const {
    count = 1,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getlastvideo',
    WFWorkflowActionParameters: {
      WFGetLatestPhotoCount: count,
    },
  };
};

export default withActionOutput(getLatestVideos);
