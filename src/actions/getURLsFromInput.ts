import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get URLs from Input Action. Returns any links found in the output from the previous action.
 *
 * ```js
 * getURLsFromInput();
 * ```
 */

const getURLsFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.link',
  WFWorkflowActionParameters: {},
});

export default getURLsFromInput;
