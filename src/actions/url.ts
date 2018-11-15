/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type UrlOptions = {
  url?: string;
};

/**
 * URL Action. Passes the specified URL to the next action.
 * @param {Object} options
 * @param {string} [options.url='']
 */
const url = (
  {
    url = '',
  }: UrlOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.url',
  WFWorkflowActionParameters: {
    WFURLActionURL: url,
  },
});

export default url;
