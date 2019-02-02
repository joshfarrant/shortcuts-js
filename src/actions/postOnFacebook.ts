import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Post on Facebook
 * @section Actions > Facebook
 * @icon Facebook
 *
 * Post on Facebook Action. Shares the input on Facebook.
 *
 * ```js
 * postOnFacebook();
 * ```
 */

const postOnFacebook = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.postonfacebook',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(postOnFacebook);
