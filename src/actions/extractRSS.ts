import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get RSS Feeds from Page Action. Extracts any RSS feed URLs from the given web URLs or web page.
 *
 * ```js
 * extractRSS();
 * ```
 */

const extractRSS = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.rss.extract',
  WFWorkflowActionParameters: {},
});

export default extractRSS;
