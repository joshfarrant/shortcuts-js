import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.tumblr.post';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

postToTumblr.identifier = identifier;
postToTumblr.invert = invert;

export default withActionOutput(postToTumblr);
