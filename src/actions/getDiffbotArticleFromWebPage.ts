import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Diffbot Article from Web Page Action. Gets article details, including body text, author, publish date and more, from every URL passed into the action.
 *
 * ```js
 * getDiffbotArticleFromWebPage();
 * ```
 */

const getDiffbotArticleFromWebPage = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getarticle',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getDiffbotArticleFromWebPage);
