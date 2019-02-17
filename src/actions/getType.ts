import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getitemtype';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getType.identifier = identifier;
getType.invert = invert;

export default withActionOutput(getType);
