import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Share with Extensions Action. Prompts to share the input.
 *
 * ```js
 * shareWithExtensions();
 * ```
 */

const shareWithExtensions = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.runextension',
  WFWorkflowActionParameters: {},
});

export default shareWithExtensions;
