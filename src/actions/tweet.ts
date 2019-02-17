import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.tweet';

/**
 * @action Tweet
 * @section Content Types > Sharing > Twitter
 * @icon Twitter
 *
 * Tweet Action. Tweets the input.
 *
 * ```js
 * tweet();
 * ```
 */
const tweet = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

tweet.identifier = identifier;
tweet.invert = invert;

export default withActionOutput(tweet);
