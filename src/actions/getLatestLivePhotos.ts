import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  count?: number;
}

const identifier = 'is.workflow.actions.getlatestlivephotos';

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
    /** The number of live photos to get */
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

getLatestLivePhotos.identifier = identifier;
getLatestLivePhotos.invert = invert;

export default withActionOutput(getLatestLivePhotos);
