import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Latest Videos
 * @section Content Types > Photos & Video > Photos
 * @icon Photos
 *
 * Gets the most recent videos from the camera roll.
 *
 * ```js
 * getLatestVideos({
 *   count: 1,
 * });
 * ```
 */

const getLatestVideos = (
  {
    count = 1,
  }: {
    /** The number of videos to get */
    count?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getlastvideo',
  WFWorkflowActionParameters: {
    WFGetLatestPhotoCount: count,
  },
});

export default withActionOutput(getLatestVideos);
