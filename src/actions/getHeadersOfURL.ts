import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Headers of URL Action. Retrieve the HTTP headers of the URL passed as input using a HEAD request.
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
