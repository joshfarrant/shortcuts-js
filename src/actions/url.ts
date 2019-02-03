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
  options: {
    /** The URL to set */
    url?: string,
  },
): WFWorkflowAction => {
  const {
    url = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.url',
    WFWorkflowActionParameters: {
      WFURLActionURL: url,
    },
  };
};

export default url;
