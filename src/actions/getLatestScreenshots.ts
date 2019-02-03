import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Latest Screenshots
 * @section Content Types > Photos & Video > Photos
 * @icon Photos
 *
 * Gets the most recent screenshots from the camera roll.
 *
 * ```js
 * getLatestScreenshots({
 *   count: 1,
 * });
 * ```
 */

const getLatestScreenshots = (
  {
    count = 1,
  }: {
    /** The number of screenshots to get */
    count?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getlastscreenshot',
  WFWorkflowActionParameters: {
    WFGetLatestPhotoCount: count,
  },
});

export default withActionOutput(getLatestScreenshots);
