import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Text from Input Action. Returns text from the previous action's output.
 *
 * ```js
 * getTextFromInput();
 * ```
 */

const getTextFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.text',
  WFWorkflowActionParameters: {},
});

export default getTextFromInput;
