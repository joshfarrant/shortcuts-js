import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.viewresult';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

viewContentGraph.identifier = identifier;
viewContentGraph.invert = invert;

export default withActionOutput(viewContentGraph);
