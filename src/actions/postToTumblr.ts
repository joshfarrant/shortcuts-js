import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Post to Tumblr
 * @section Content Types > Sharing > Tumblr
 * @icon Tumblr
 *
 * Posts the content passed into the action to Tumblr.
 *
 * ```js
 * postToTumblr();
 * ```
 */

const postToTumblr = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.tumblr.post',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(postToTumblr);
