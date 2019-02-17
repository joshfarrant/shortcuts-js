import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getwebpagecontents';

/**
 * @action Get Contents of Web Page
 * @section Content Types > Web > Safari
 * @icon Safari
 *
 * Extracts the contents of the web pages passed into the action.
 *
 * ```js
 * getContentsOfWebPage();
 * ```
 */
const getContentsOfWebPage = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getContentsOfWebPage.identifier = identifier;
getContentsOfWebPage.invert = invert;

export default withActionOutput(getContentsOfWebPage);
