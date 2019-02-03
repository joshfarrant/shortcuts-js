import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Latest Bursts
 * @section Content Types > Photos & Video > Photos
 * @icon Bursts
 *
 * Gets the most recent burst photos from the camera roll.
 *
 * ```js
 * getLatestBursts({
 *   count: 20,
 * });
 * ```
 */

const getLatestBursts = (
  {
    count = 1,
  }: {
    /** The number of burst photos to get */
    count?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestbursts',
  WFWorkflowActionParameters: {
    WFGetLatestPhotoCount: count,
  },
});

export default withActionOutput(getLatestBursts);
