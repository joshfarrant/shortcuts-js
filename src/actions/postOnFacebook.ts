import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
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
