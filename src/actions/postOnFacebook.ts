import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Post on Facebook
 * @section Content Types > Sharing > Facebook
 * @icon Facebook
 *
 * Shares the input on Facebook.
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
