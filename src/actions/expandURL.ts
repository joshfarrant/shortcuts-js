import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Expand URL
 * @section Content Types > Web > URLs
 * @icon URL
 *
 * This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly.
 *
 * ```js
 * expandURL();
 * ```
 */

const expandURL = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.url.expand',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(expandURL);
