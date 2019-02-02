import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Select Email Address
 * @section Actions > Contacts > Email
 * @icon Mail
 *
 * Prompts to pick an email address from your contacts and passes the selection to the next action.
 *
 * ```js
 * selectEmailAddress();
 * ```
 */

const selectEmailAddress = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.selectemail',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(selectEmailAddress);
