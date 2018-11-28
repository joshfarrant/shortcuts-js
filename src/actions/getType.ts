/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type GetTypeOptions = {};

/**
 * Get Type Action. Returns the type of every item passed as input. For example, if a URL is passed, this action will return URL.
 * @param {Object} [options]
 */
const getType = (
  {}: GetTypeOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getitemtype',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getType);
