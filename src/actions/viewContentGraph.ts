/** @module actions */

import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type ViewContentGraphOptions = {};

/**
 * View Content Graph Action. Shows the results of the previous action in the Content Graph.
 * @param {Object} [options]
 */
const viewContentGraph = (
  {}: ViewContentGraphOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.viewresult',
  WFWorkflowActionParameters: {},
});

export default withUUID(viewContentGraph);
