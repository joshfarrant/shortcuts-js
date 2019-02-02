import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Contents of Web Page
 * @section Actions > Web > Web
 * @icon Safari
 *
 * Extracts the contents of the web pages passed into the action.
 *
 * ```js
 * getContentsOfWebPage();
 * ```
 */

const getContentsOfWebPage = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getwebpagecontents',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getContentsOfWebPage);
