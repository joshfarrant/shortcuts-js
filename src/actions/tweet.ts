import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Tweet Action. Tweets the input.
 *
 * ```js
 * tweet();
 * ```
 */
const tweet = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.tweet',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(tweet);
