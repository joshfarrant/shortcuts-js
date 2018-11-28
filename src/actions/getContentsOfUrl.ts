import {
  buildSerialization,
  withActionOutput,
} from '../utils';

import WFHTTPBodyType from '../interfaces/WF/WFHTTPBodyType';
import WFHttpMethod from '../interfaces/WF/WFHTTPMethod';
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
 * Get Content of URL Action. Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.
 *
 * ```js
 * getContentsOfUrl({
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
const getContentsOfUrl = (
  options: {
    /** The headers to attach to the request */
    headers?: {
      [x: string]: Value,
    };
    /** The HTTP method to use */
    method?: WFHttpMethod;
    /** The request body type */
    requestBodyType?: WFHTTPBodyType;
    /** The request body */
    requestBody?: {
      [x: string]: Value,
    };
  },
): WFWorkflowAction => {
  const {
    headers = {},
    method = 'GET',
    requestBodyType = 'JSON',
    requestBody = {},
  } = options;

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

export default withActionOutput(getContentsOfUrl);
