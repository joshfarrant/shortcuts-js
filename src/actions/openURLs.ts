import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Open URLs
 * @section Content Types > Web > Safari
 * @icon Safari
 *
 * Opens URLs passed into the action in Safari.
 *
 * ```js
 * openURLs();
 * ```
 */

const openURLs = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.openurl',
  WFWorkflowActionParameters: {},
});

export default openURLs;
