import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Latest Live Photos
 * @section Content Types > Photos & Video > Photos
 * @icon LivePhotos
 *
 * Gets the most recent Live Photos from the camera roll.
 *
 * ```js
 * getLatestLivePhotos({
 *   count: 1,
 * });
 * ```
 */

const getLatestLivePhotos = (
  {
    count = 1,
  }: {
    /** The number of live photos to get */
    count?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestlivephotos',
  WFWorkflowActionParameters: {
    WFGetLatestPhotoCount: count,
  },
});

export default withActionOutput(getLatestLivePhotos);
