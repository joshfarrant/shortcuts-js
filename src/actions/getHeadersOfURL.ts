import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Headers of URL
 * @section Content Types > Web > URLs
 * @icon Downloads
 *
 * Retrieves the HTTP headers of the URL passed as input using a HEAD request.
 *
 * ```js
 * getHeadersOfURL();
 * ```
 */

const getHeadersOfURL = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.url.getheaders',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getHeadersOfURL);
