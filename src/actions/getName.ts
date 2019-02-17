import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getitemname';

/**
 * @action Get Name
 * @section Actions > Scripting > Content
 * @icon Scripting
 *
 * Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc.
 *
 * ```js
 * getName();
 * ```
 */
const getName = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getName.identifier = identifier;
getName.invert = invert;

export default withActionOutput(getName);
