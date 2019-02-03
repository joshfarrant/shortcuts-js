import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Post to WordPress
 * @section Content Types > Sharing > WordPress
 * @icon Wordpress
 *
 * Posts the input to a WordPress blog as a new post or page.
 *
 * ```js
 * postToWordpress();
 * ```
 */

const postToWordpress = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.wordpress.post',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(postToWordpress);
