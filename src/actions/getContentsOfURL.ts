import { buildSerialization } from '../utils/buildSerialization';
import { withActionOutput } from '../utils/withActionOutput';

import WFHTTPBodyType from '../interfaces/WF/WFHTTPBodyType';
import WFHTTPMethod from '../interfaces/WF/WFHTTPMethod';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/** @ignore */
type Value = (
  string
  | number
  | boolean
  | []
  | {}
);

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
    headers = {},
    method = 'GET',
    requestBodyType = 'JSON',
    requestBody = {},
  }: {
    /** The headers to attach to the request */
    headers?: {
      [x: string]: Value,
    };
    /** The HTTP method to use */
    method?: WFHTTPMethod;
    /** The request body type */
    requestBodyType?: WFHTTPBodyType;
    /** The request body */
    requestBody?: {
      [x: string]: Value,
    };
  },
): WFWorkflowAction => {
  const action: WFWorkflowAction = {
    WFWorkflowActionIdentifier: 'is.workflow.actions.downloadurl',
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
