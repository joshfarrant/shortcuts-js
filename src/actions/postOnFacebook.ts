import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.postonfacebook';

/**
 * @action Post on Facebook
 * @section Content Types > Sharing > Facebook
 * @icon Facebook
 *
 * Post on Facebook Action. Shares the input on Facebook.
 *
 * ```js
 * postOnFacebook();
 * ```
 */
const postOnFacebook = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

postOnFacebook.identifier = identifier;
postOnFacebook.invert = invert;

export default withActionOutput(postOnFacebook);
