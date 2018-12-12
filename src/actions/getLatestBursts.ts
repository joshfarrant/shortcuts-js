import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Latest Bursts. Gets the most recent burst photos from the camera roll.
 *
 * ```js
 * getLatestBursts({
 *   count: 20,
 * });
 * ```
 */
const getLatestBursts = (
  options: {
    /** The number of burst photos to get */
    count?: number,
  },
): WFWorkflowAction => {
  const {
    count = 1,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestbursts',
    WFWorkflowActionParameters: {
      WFGetLatestPhotoCount: count,
    },
  };
};

export default withActionOutput(getLatestBursts);
