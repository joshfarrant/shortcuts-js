import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * View Content Graph Action. Shows the results of the previous action in the Content Graph.
 *
 * ```js
 * viewContentGraph();
 * ```
 */
const viewContentGraph = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.viewresult',
  WFWorkflowActionParameters: {},
});

export default withUUID(viewContentGraph);
