import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Share with Extensions Action. Prompts to share the input.
 *
 * ```js
 * share();
 * ```
 */

const share = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.share',
  WFWorkflowActionParameters: {},
});

export default share;
