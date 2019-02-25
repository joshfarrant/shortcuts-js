import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  url?: string;
}

const identifier = 'is.workflow.actions.url';

/**
 * @action URL
 * @section Content Types > Web > URLs
 * @icon URL
 *
 * Passes the specified URL to the next action.
 *
 * ```js
 * URL({
 *   url: 'https://shortcuts.fun',
 * });
 * ```
 */
const URL = (
  {
    /** The URL to set */
    url = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFURLActionURL: url,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  url: WFAction.WFWorkflowActionParameters.WFURLActionURL,
});

URL.identifier = identifier;
URL.invert = invert;

export default URL;
