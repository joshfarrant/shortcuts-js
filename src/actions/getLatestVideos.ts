import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  count?: number;
}

const identifier = 'is.workflow.actions.getlastvideo';

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
    /** The number of videos to get */
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

getLatestVideos.identifier = identifier;
getLatestVideos.invert = invert;

export default withActionOutput(getLatestVideos);
