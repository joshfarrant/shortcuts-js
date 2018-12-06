import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Select Email Addesses Action. Prompts to pick an email address from your contacts and passes the selection to the next action.
 *
 * ```js
 * selectEmailAddress();
 * ```
 */

const selectEmailAddress = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.selectemail',
  WFWorkflowActionParameters: {},
});

export default selectEmailAddress;
