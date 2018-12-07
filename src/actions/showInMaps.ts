import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show in Maps Action. Opens your choice of Maps, Google Maps or Waze, and searches for the location, place or text that was passed into the action.
 *
 * ```js
 * showInMaps();
 * ```
 */
const showInMaps = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.searchmaps',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(showInMaps);
