import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.openurl';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

openURLs.identifier = identifier;
openURLs.invert = invert;

export default openURLs;
