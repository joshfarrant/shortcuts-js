import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Type
 * @section Actions > Scripting > Content
 * @icon Scripting
 *
 * Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”.
 *
 * ```js
 * getType();
 * ```
 */

const getType = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getitemtype',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getType);
