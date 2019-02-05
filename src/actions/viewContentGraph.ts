import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action View Content Graph
 * @section Actions > Scripting > Content
 * @icon Graph
 *
 * Shows the results of the previous action in the Content Graph.
 *
 * ```js
 * viewContentGraph();
 * ```
 */

const viewContentGraph = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.viewresult',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(viewContentGraph);
