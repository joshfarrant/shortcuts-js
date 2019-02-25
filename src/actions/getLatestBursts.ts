import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  count?: number;
}

const identifier = 'is.workflow.actions.getlatestbursts';

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
    /** The number of burst photos to get */
    count = 1,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFGetLatestPhotoCount: count,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  count: WFAction.WFWorkflowActionParameters.WFGetLatestPhotoCount,
});

getLatestBursts.identifier = identifier;
getLatestBursts.invert = invert;

export default withActionOutput(getLatestBursts);
