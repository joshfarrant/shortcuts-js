/** @module actions */

import {
  buildSerialization,
  withUUID,
} from '../utils';

import WFHTTPBodyType from '../interfaces/WF/WFHTTPBodyType';
import WFHttpMethod from '../interfaces/WF/WFHTTPMethod';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type Value = (
  string
  | number
  | boolean
  | []
  | {}
);

type GetContentsOfUrlOptions = {
  headers?: {
    [x: string]: Value,
  };
  method?: WFHttpMethod;
  requestBodyType?: WFHTTPBodyType;
  requestBody?: {
    [x: string]: Value,
  };
};

/**
 * Get Content of URL Action. Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.
 * @param {Object} options
 * @param {WFHttpMethod} [options.method='GET']
 * @param {WFHTTPBodyType} [options.requestBodyType='']
 * @param {requestBody} [options.requestBody={}]
 */
const getContentsOfUrl = (
  {
    headers = {},
    method = 'GET',
    requestBodyType = 'JSON',
    requestBody = {},
  }: GetContentsOfUrlOptions,
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

export default withUUID(getContentsOfUrl);
