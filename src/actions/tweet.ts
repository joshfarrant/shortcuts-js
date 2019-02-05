import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Tweet
 * @section Content Types > Sharing > Twitter
 * @icon Twitter
 *
 * Tweets the input.
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
