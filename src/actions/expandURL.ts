import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Expand URL Action. This action expands and cleans up URLs that have been shortend using a URL shortening service like TinyURL or Bit.ly.
 *
 * ```js
 * expandURL();
 * ```
 */

const expandURL = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.url.expand',
  WFWorkflowActionParameters: {},
});

export default expandURL;
