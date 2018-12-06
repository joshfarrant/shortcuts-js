import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Contents of Web Page Action. Extracts the contents of the web pages passed into the action.
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
