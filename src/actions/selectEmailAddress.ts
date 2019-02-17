import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.selectemail';

/**
 * @action Select Email Address
 * @section Content Types > Contacts > Mail
 * @icon Mail
 *
 * Prompts to pick an email address from your contacts and passes the selection to the next action.
 *
 * ```js
 * selectEmailAddress();
 * ```
 */
const selectEmailAddress = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

selectEmailAddress.identifier = identifier;
selectEmailAddress.invert = invert;

export default withActionOutput(selectEmailAddress);
