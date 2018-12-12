import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Latest Live Photos. Gets the most recent Live Photos from the camera roll.
 *
 * ```js
 * getLatestLivePhotos({
 *   count: 1,
 * });
 * ```
 */
const getLatestLivePhotos = (
  options: {
    /** The number of live photos to get */
    count: number,
  },
): WFWorkflowAction => {
  const {
    count = 1,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestlivephotos',
    WFWorkflowActionParameters: {
      WFGetLatestPhotoCount: count,
    },
  };
};

export default withActionOutput(getLatestLivePhotos);
