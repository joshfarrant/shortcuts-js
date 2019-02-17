import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.url.getheaders';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getHeadersOfURL.identifier = identifier;
getHeadersOfURL.invert = invert;

export default withActionOutput(getHeadersOfURL);
