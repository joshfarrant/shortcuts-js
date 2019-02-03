import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action URL
 * @section Content Types > Web > URLs
 * @icon URL
 *
 * Passes the specified URL to the next action.
 *
 * ```js
 * url({
 *   url: 'https://shortcuts.fun',
 * });
 * ```
 */

const url = (
  {
    url = '',
  }: {
    /** The URL to set */
    url?: string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.url',
  WFWorkflowActionParameters: {
    WFURLActionURL: url,
  },
});

export default url;
