import { buildSerialization } from '../utils/buildSerialization';
import { withActionOutput } from '../utils/withActionOutput';

import WFHTTPBodyType from '../interfaces/WF/WFHTTPBodyType';
import WFHTTPMethod from '../interfaces/WF/WFHTTPMethod';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  headers?: {
    [x: string]: Value,
  };
  method?: WFHTTPMethod;
  requestBodyType?: WFHTTPBodyType;
  requestBody?: {
    [x: string]: Value,
  };
}

type Value = (
  string
  | number
  | boolean
  | []
  | {}
);

const identifier = 'is.workflow.actions.downloadurl';

/**
 * @action Get Contents of URL
 * @section Content Types > Web > URLs
 * @icon Downloads
 *
 * Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.
 *
 * ```js
 * getContentsOfURL({
 *   headers: {
 *     'Authorization': 'Pretty please',
 *     'X-Some-Header': 'Badger',
 *   },
 *   method: 'POST',
 *   requestBodyType: 'JSON',
 *   requestBody: {
 *     myObj: {
 *       things: [1, 2, 3],
 *       someString: 'Hello',
 *     },
 *     someOtherString: 'World!',
 *   },
 * });
 * ```
 */
const getContentsOfURL = (
  {
    /** The headers to attach to the request */
    headers = {},
    /** The HTTP method to use */
    method = 'GET',
    /** The request body type */
    requestBodyType = 'JSON',
    /** The request body */
    requestBody = {},
  }: Options,
): WFWorkflowAction => {
  const action: WFWorkflowAction = {
    WFWorkflowActionIdentifier: identifier,
    WFWorkflowActionParameters: {
      WFHTTPHeaders: buildSerialization(headers),
      ShowHeaders: Object.entries(headers).length > 0,
      Advanced: method !== 'GET',
      WFHTTPMethod: method,
      WFHTTPBodyType: requestBodyType,
    },
  };

  if (requestBodyType === 'JSON') {
    action.WFWorkflowActionParameters.WFJSONValues = buildSerialization(requestBody);
  }

  // I'd love to have an else if here, but it breaks Jest's coverage calculation :(

  if (requestBodyType === 'Form') {
    action.WFWorkflowActionParameters.WFFormValues = buildSerialization(requestBody);
  }

  return action;
};

export default withActionOutput(getContentsOfURL);
