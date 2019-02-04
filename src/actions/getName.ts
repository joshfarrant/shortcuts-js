import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  WFWorkflowActionIdentifier: 'is.workflow.actions.getitemname',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getName);
