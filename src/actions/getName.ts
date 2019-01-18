import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Returns the name of every item passed as input. Depending on the input, this could be a filename, the title of a website, the title of a calendar event, etc.
 *
 * ```js
 * getName();
 * ```
 *
 * @action Get Name
 * @section Actions/Scripting/Content
 */
const getName = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getitemname',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getName);

export const icon = 70;
