import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  count?: number;
}

const identifier = 'is.workflow.actions.getlastscreenshot';

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
    /** The number of screenshots to get */
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

getLatestScreenshots.identifier = identifier;
getLatestScreenshots.invert = invert;

export default withActionOutput(getLatestScreenshots);
